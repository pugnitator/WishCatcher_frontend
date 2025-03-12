import styled from 'styled-components';
import Button from './Buttons/Button';
import Input from './Input';
import CloseButton from './Buttons/CloseButton';
import { InputProp } from './Input';
import { buttonColors } from './Buttons/Button';

export interface FormProp {
  title: string;
  buttonText: string;
  inputsList: InputProp[];
  children?: React.ReactNode;
}

export default function Form({
  title,
  buttonText,
  inputsList,
  children,
}: FormProp) {
  return (
    <StyledForm>
      <h2>{title}</h2>
      <CloseButton />
      <InputsWrap>
        {inputsList.map((item, index) => (
          <Input
            title={item.title}
            inputType={item.inputType}
            key={`formInput` + index}
          />
        ))}
      </InputsWrap>
      <div>{children}</div>
      <Button
        isLink={false}
        text={buttonText}
        onClick={() => console.log('Войти')}
        isSubmit={true}
        btnColor={buttonColors.purple}
      />
    </StyledForm>
  );
}

const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
`;

const StyledForm = styled.form`
  position: relative;
  height: 100%;
  width: 100%;

  color: var(--color-dark)
`;


