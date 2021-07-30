


import { Container } from './styles';

interface MessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

export function MessageBox({
  description, footerText, icon, title
}: MessageBoxProps) {

  return (
    <Container>
      <header>
        <h1>
          {title} 
          <img src={icon} alt="" /> 
        </h1>

        <p>{description}</p>
      </header>

      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  )
}