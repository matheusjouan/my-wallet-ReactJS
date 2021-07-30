import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip
} from 'recharts'
import { formatPrice } from '../../utils/formattedCurrency'


import { 
  Container,
  LegendContainer,
  Legend,
  SideLeft,
  SideRight, 

} from './styles'

interface BarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

export function BarCharts({
  data, title
}: BarChartProps) {

  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LegendContainer>
          {
            data.map(legend => (
              <Legend color={legend.color} key={legend.name}>
                <div>{legend.percent}%</div>
                <span>{legend.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
      </SideLeft>

      <SideRight>
          <ResponsiveContainer>
            <BarChart data={data}>
                <Bar dataKey="amount" name="Valor">
                  {data.map(item => (
                    <Cell 
                    key={item.name} 
                    fill={item.color}

                    />
                  ))}
                </Bar>
                <Tooltip 
                  cursor={{ fill: 'none'}}
                  formatter={(value: string) => formatPrice(Number(value))}
                />
              </BarChart>
          </ResponsiveContainer>
      </SideRight>
    </Container>
  )
}