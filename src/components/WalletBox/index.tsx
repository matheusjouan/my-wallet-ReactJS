import { useMemo } from 'react';

import CountUp from 'react-countup';

import dollaImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface WalletBoxProps {
  title: string;
  amount: number;
  footerlabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

export function WalletBox({
  amount, color, title, footerlabel, icon
}: WalletBoxProps) {

  const iconSelected =  useMemo(() => {
      if (icon === 'dollar')
        return dollaImg;
      else if (icon === 'arrowUp')
        return arrowUpImg;
      else
        return arrowDownImg; 
  }, [icon])

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  )
}