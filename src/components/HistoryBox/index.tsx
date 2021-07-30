
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip

 } from 'recharts';

 import { formatPrice } from '../../utils/formattedCurrency';

import { Container, CharContainer, Header, Legend, LegendContainer } from './styles'

interface HistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

export function HistoryBox(
  { data, 
    lineColorAmountEntry, 
    lineColorAmountOutput
  }: HistoryBoxProps) {

  return (
    <Container>

      <Header>
      <h2>Histórico de Saldo</h2>

        <LegendContainer>
          <Legend color={lineColorAmountOutput}> 
            <div>30%</div>
            <span>Saídas</span>
          </Legend>

          <Legend color={lineColorAmountEntry}> 
            <div>30%</div>
            <span>Entradas</span>
          </Legend>
        </LegendContainer>

      </Header>

      <CharContainer>
      <ResponsiveContainer>
        <LineChart className="poss" data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip 
            formatter={(value: string) => formatPrice(Number(value))}
          />

          <Line 
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />   

          <Line 
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />

   
        </LineChart>

      </ResponsiveContainer>
      </CharContainer>
    </Container>
  )

}
