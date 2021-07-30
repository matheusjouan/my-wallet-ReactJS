import { Container, Label, SyledSwitch } from './styles';

interface ToggleSwitchProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

export function ToggleSwitch({
  checked, labelLeft, labelRight, onChange
}: ToggleSwitchProps) {



  return (
    <Container>
      <Label>{labelLeft}</Label>
        <SyledSwitch  
        checked={checked}
        onChange={onChange} 
        uncheckedIcon={false}
        checkedIcon={false}
        />
      <Label>{labelRight}</Label>

    </Container>
  )
}