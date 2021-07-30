import { useMemo, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { ContentHeader } from '../../components/Layout/Content/ContentHeader';
import { SelectInput } from '../../components/SelectInput';
import { HistoryFinanceCard } from './HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/month';

import { formatPrice } from '../../utils/formattedCurrency';


import { Container, Content, Filters } from './styles';
import { formattedDate } from '../../utils/formattedDate';
import { uuid } from 'uuidv4';

interface ListParams {
  type: string;
}

interface IData {
  id: string;
  description: string;
  amountFormmated: string;
  type: string;
  frequency: string;
  dateFormatted: string;
};

export function List() {

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedFrequency, setSelectedFrequency] = useState(['recurrent', 'eventual']);


  const params = useParams<ListParams>();
  const { type } = params;


  const pageData = useMemo(() => {
    return type === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#4E41F0',
      listData: gains
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E',
      listData: expenses
    }
  }, [type]);



  const optionsMonth = useMemo(() => {

    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, []);


  
  // Pegando os options de forma não repetida
  const optionsYear = useMemo(() => {
    let uniqueYears: number[] = [];

    pageData.listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      // Se o option não conter já na lista adiciona, senão pula
      // Evita valores repetidos dentro do select (sendo único)
      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, [pageData]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      item => item === frequency
    )

    if (alreadySelected >= 0) {
      // Exclui já o filtro já exisitente
      const filtered = selectedFrequency.filter(item => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency([...selectedFrequency, frequency]);
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth)
    } catch(err) {
      throw new Error(err.message);
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear)
    } catch(err) {
      throw new Error(err.message);
    }
  }
  

  useEffect(() => {
    const filteredDate = pageData.listData.filter(item => {

      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected 
      && year === yearSelected 
      && selectedFrequency.includes(item.frequency)
    });

    const dataFormmated = filteredDate.map(item => {
      return {
        id: uuid(),
        description: item.description,
        amountFormmated: formatPrice(Number(item.amount)),
        type: item.type,
        frequency: item.frequency === 'recurrent' ? '#4E41F0' : '#E44C4E',
        dateFormatted: formattedDate(item.date),
      }
    })

    setData(dataFormmated);

  }, [pageData ,selectedFrequency, data.length, yearSelected, monthSelected, ]);

  
  return (
    <Container>
      <ContentHeader
        title={pageData.title}
        lineColor={pageData.lineColor}
      >
        <SelectInput 
          options={optionsMonth} 
          handleOnChange={(event) => handleMonthSelected(event.target.value)}
          defaultValue={monthSelected} 
        />

        <SelectInput 
          options={optionsYear} 
          handleOnChange={(event) => handleYearSelected(event.target.value)}
          defaultValue={yearSelected} 
        />

      </ContentHeader>

      <Filters>
        <button 
          type="button"
          className={`tag-filter tag-filter-recurrent
          ${selectedFrequency.includes('recurrent') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recurrent')}
        >
          Recorrentes
        </button>

        <button 
          type="button"
          className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
      {data.map(card => (
        <HistoryFinanceCard 
          key={card.id} 
          amount={card.amountFormmated}
          subtitle={card.dateFormatted}
          tagColor={card.frequency}
          title={card.description}
        />
      ))}

        </Content>
    </Container>
  )
}