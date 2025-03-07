import styled from 'styled-components';
import Input from '../6_shared/ui/Input';
import Button from '../6_shared/ui/Button';
import theme from '../1_app/ui/Theme';

interface loginSignUpModalProp {
  formType: string;
}

export default function LoginSignUpForm(prop: loginSignUpModalProp) {
  const { formType } = prop;
  console.log('Я в форме', formType);
  const formProp = formType === 'login' ? {title: 'Вход', buttonText: 'Войти'} 
  : formType === 'signUp' ? {title: 'Регистрация', buttonText: 'Зарегистрироваться'} : null


  return (
    formType && formProp && <StyledForm>
        <h2>
          {formProp.title}
        </h2>
        <Input title="Логин" />
        <Input title="Пароль" inputType="password" />
        <ButtonContainer>
          <Button
            text={formProp.buttonText}
            onClick={() => console.log('Войти')}
          />
        </ButtonContainer>
      </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  min-width: 35vw;
  min-height: 40vh;
  border-radius: 25px;
  background-color: ${theme.listBackground};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;