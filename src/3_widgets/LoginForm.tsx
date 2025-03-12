import { useState } from 'react';
import Form from '../6_shared/ui/Form';
import styled from 'styled-components';

export default function LoginForm(isLogin: boolean) {
  const [isLoginForm, setIsLoginForm] = useState(isLogin);

  console.log('я в форме', isLogin);
  
  const formProp = isLogin
    ? { title: 'Вход', buttonText: 'Войти' }
    : { title: 'Регистрация', buttonText: 'Зарегистрироваться' };
  
    const inputList = [
    { title: 'Логин' },
    { title: 'Пароль', inputType: 'password' },
  ];

  return (
    <Form {...formProp} inputsList={inputList}>
      <SwitchFormButton onClick={() => setIsLoginForm(!isLogin)}>
        {isLoginForm ? 'У меня ещё нет аккаунта' : 'У меня уже есть аккаунт'}
      </SwitchFormButton>
    </Form>
  );
}

const SwitchFormButton = styled.button`
  color: var(--color-purple);
  text-align: center;
  text-decoration: underline;
  font-weight: 700;

  background-color: transparent;

  border: none;
  border-radius: 0;

  &:hover {
    color: var(--color-purple-light)
  }
`;
