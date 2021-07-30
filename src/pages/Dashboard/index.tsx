
import { useMemo, useState } from 'react';
import { ContentHeader } from '../../components/Layout/Content/ContentHeader';
import { SelectInput } from '../../components/SelectInput';

import listOfMonths from '../../utils/month';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content } from './styles';
import { WalletBox } from '../../components/WalletBox';
import { MessageBox } from '../../components/MessageBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import { PieCharts } from '../../components/PieCharts';
import { HistoryBox } from '../../components/HistoryBox';
import { BarCharts } from '../../components/BarCharts';


export function Dashboard() {
  
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

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

  const optionsMonth = useMemo(() => {

    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, []);

  const optionsYear = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
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
  }, []); 

  const totalExpenses = useMemo(() => {
    let total = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        total += Number(item.amount); 
      }
    })

    return total;
    
  }, [monthSelected, yearSelected]);


  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        total += Number(item.amount); 
      }
    })

    return total;
    
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  // Variável de relação para ser utilizada no Gráfico
  const relationsExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const gainsPercent = Number(((totalGains/total) * 100).toFixed(1));
    const expensesPercent = Number(((totalExpenses/total) * 100).toFixed(1));

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: gainsPercent ? gainsPercent : 0,
        color: '#F7931B'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: expensesPercent ? expensesPercent : 0,
        color: '#e44c4e'
      }
    ]

    return data;


  }, [totalExpenses, totalGains]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          amountEntry += Number(gain.amount);
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          amountOutput += Number(expense.amount);
        }
      });

      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }

      // Mostra todos os dados se o ano ja passou
      // Ou se tiver no ano, os meses anteriores
    }).filter(item => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
        (yearSelected < currentYear)
    })
  }, [yearSelected]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste",
        description: "Esse mês vc gastou mais do que deveria",
        footerText: "Verifique seus gastos e tente cordar algumas coisas desnecessárias",
        icon: sadImg
      }
    }

    else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: "Ops!",
        description: "Nesse mês não houve registros de entradas e saídas",
        footerText: "Parece que você não fez nenhum registro",
        icon: happyImg
      }
    }

    else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Esse mês vc gastou exatamente o que ganhou",
        footerText: "Tenha cuidado, no próximo mês tente poupar seu dinheiro",
        icon: happyImg
      }
    } 

    return {
      title: "Muito bem!",
      description: "Sua carteira esta positiva!",
      footerText: "Continue assim. Considere investir o seu saldo",
      icon: happyImg
    }

  }, [totalBalance, totalExpenses, totalGains])

  const relationExpensevesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;


    expenses.filter(expense => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return (month === monthSelected && year === yearSelected)
    }).forEach(expense => {
      if(expense.frequency === 'recurrent') {
        return amountRecurrent += Number(expense.amount)
      } else {
        return amountEventual += Number(expense.amount)
      }
    })

      const total = amountEventual + amountRecurrent;
      const percentRecurrent = Number(((amountRecurrent/total) * 100).toFixed(1)) 
      const percentEventual = Number(((amountEventual/total) * 100).toFixed(1)) 

    return [
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#F7931B',
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E'
      },

    ]

  },[monthSelected, yearSelected]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;


    gains.filter(gain => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return (month === monthSelected && year === yearSelected)
    }).forEach(gain => {
      if(gain.frequency === 'recurrent') {
        return amountRecurrent += Number(gain.amount)
      } else {
        return amountEventual += Number(gain.amount)
      }
    })

      const total = amountEventual + amountRecurrent;
      const percentRecurrent = Number(((amountRecurrent/total) * 100).toFixed(1)) 
      const percentEventual = Number(((amountEventual/total) * 100).toFixed(1)) 

      

    return [
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#F7931B',
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E'
      },

    ]

  },[monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader
        title="Dashboard"
        lineColor="#F7931B"
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

      <Content>
        <WalletBox 
          title="saldo"
          amount={totalBalance}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4E41F0"      
        />

        <WalletBox 
          title="entradas"
          amount={totalGains}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931b"      
        />

        <WalletBox 
          title="saídas"
          amount={totalExpenses}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"      
        />

        <MessageBox
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
          title={message.title}
        />

        <PieCharts
          data={relationsExpensesVersusGains}
        />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#e44c4e"
        />

       <BarCharts
        data={relationExpensevesRecurrentVersusEventual}
        title="Saídas"
       />

      <BarCharts
        data={relationGainsRecurrentVersusEventual}
        title="Entradas"
       />

      </Content>

    </Container>
  )
}