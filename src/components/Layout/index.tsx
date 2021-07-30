

import { MainHeader } from './MainHeader';
import { Aside } from './Aside';
import { Content } from './Content';

import { Container } from './styles'
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
} 

export function Layout({ children }: LayoutProps) {

  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </Container>
  )
}