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
  const formProp =
    formType === 'login'
      ? { title: 'Вход', buttonText: 'Войти' }
      : formType === 'signUp'
      ? { title: 'Регистрация', buttonText: 'Зарегистрироваться' }
      : null;

  return (
    formType &&
    formProp && (
      <StyledForm>
        <h2>{formProp.title}</h2>
        <Input title="Логин" />
        <Input title="Пароль" inputType="password" />
          <Button
            text={formProp.buttonText}
            onClick={() => console.log('Войти')}
          />
      </StyledForm>
    )
  );
}

const StyledForm = styled.form`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: start;
  // gap: 50px;
  // padding: 30px;
  // width: clamp(300px, 41vw, 600px)
  // height: 400px;
  // border-radius: 25px;
  // background-color: ${theme.colorLightAlt};
`;
