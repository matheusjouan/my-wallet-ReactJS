import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { 
  Container,
  Logo,
  Form,
  FormTitle 

} from './styles';
import { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn(email, password);
  }
  
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="My Wallet" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={handleSubmit}>
        <FormTitle>Entrar</FormTitle>

        <Input 
          type="email" 
          required 
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
        />    

        <Input 
          type="password" 
          required  
          placeholder="Senha"
          onChange={event => setPassword(event.target.value)}
        />    


        <Button type="submit">
          Acessar
        </Button>
      </Form>
    </Container>
  )
}