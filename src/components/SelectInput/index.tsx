import { ChangeEvent } from 'react';
import { Container } from './styles';

interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
  handleOnChange(event: ChangeEvent<HTMLSelectElement>): void | undefined,
  defaultValue?: string | number;
}


export function SelectInput({ options, handleOnChange, defaultValue }: SelectInputProps) {

  return (
    <Container>
      <select name="" id="" onChange={handleOnChange} defaultValue={defaultValue}>
        {
          options.map(option => (
            <option 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }

      </select>
    </Container>
  )
}