import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface FormInputProp {
  register: ReturnType<UseFormRegister<any>>;
  title: string;
  placeholder: string;
  type?: string;
  errorMessage?: string;
  disabled?: boolean;
}

export default function FormInput({
  register,
  title,
  placeholder,
  type,
  errorMessage,
  disabled,
}: FormInputProp) {
  return (
    <Container>
      <label>{title}</label>
      <StyledInput {...register} type={type ?? 'text'} placeholder={placeholder} disabled={disabled}/>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;

  width: 100%;
`;

const StyledInput = styled.input`
  background-color: var(--color-light);
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 11px;
  color: var(--color-red);
`;
