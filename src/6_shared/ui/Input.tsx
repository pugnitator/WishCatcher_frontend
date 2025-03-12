import styled from 'styled-components';
import theme from '../../1_app/ui/Theme';

export interface InputProp {
  title: string;
  inputType?: string;
}

export default function Input(prop: InputProp) {
  const { title, inputType } = prop;

  return (
    <Container>
      <label>{title}</label>
      <StyledInput type={inputType ? inputType : 'text'} placeholder={`Введите ` + title.toLowerCase()} />
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
  background-color: ${theme.colorLight};
  border-radius: 10px;
`;
