
import { Container, Tag } from './styles'

interface HistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

export function HistoryFinanceCard({
   amount, subtitle, tagColor, title
  }: HistoryFinanceCardProps) {

  return (
    <Container>
      <Tag  color={tagColor}/>
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  )
}