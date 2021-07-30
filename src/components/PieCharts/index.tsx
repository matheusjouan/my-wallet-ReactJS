import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


import { 
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight 

} from './styles'

interface PieChartsProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}

export function PieCharts({ data }: PieChartsProps) {

  return (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
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
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
            >
              {
                data.map(item => (
                  <Cell 
                    key={item.name}
                    fill={item.color}
                  />
                ))
              }
              </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  )
}
