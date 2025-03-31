import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface FormInputProp {
  register: ReturnType<UseFormRegister<any>>;
  title: string;
  placeholder: string;
  type?: string;
  errorMessage?: string;
  isReadOnly?: boolean;
}

export default function FormTextarea({
  register,
  title,
  placeholder,
  errorMessage,
  isReadOnly,
}: FormInputProp) {
  return (
    <Container>
      <label>{title}</label>
      <StyledTextArea
        autoComplete="off"
        readOnly={isReadOnly ?? false}
        {...register}
        placeholder={placeholder}
      />
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

const StyledTextArea = styled.textarea`
  min-height: 150px;
  max-width: inherit;

  padding: 15px 10px;

  background-color: var(--color-light);

  text-align: start;
  resize: none;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 11px;
  color: var(--color-red);
`;
