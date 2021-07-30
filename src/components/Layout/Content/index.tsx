import { ReactNode } from 'react';

import { Container } from './styles'

interface ContentProps {
  children: ReactNode;
} 

export function Content({ children }: ContentProps) {

  return (
    <Container>
      {children}
    </Container>
  )
}