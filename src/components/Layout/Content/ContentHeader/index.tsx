import { ReactNode } from 'react';
import { Container, Controllers, Title } from './styles';

interface ContentHeaderProps {
  title: string;
  lineColor: string;
  children: ReactNode;
}

export function ContentHeader({ 
  title, 
  children, 
  lineColor }: ContentHeaderProps) {



  return (
    <Container>
      <Title lineColor={lineColor}>{title}</Title>

      <Controllers>
        {children}
      </Controllers>
    </Container>
  )
}