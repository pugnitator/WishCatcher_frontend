import { useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../6_shared/ui/Form/FormInput';
import styled from 'styled-components';
import { registrationFormScheme } from '../6_shared/ui/Form/registrationFormScheme';
import { AppContext } from '../1_app/App';
import Button, { buttonColors } from '../6_shared/ui/Buttons/Button';

export function LoginSignUpForm() {
  const context = useContext(AppContext);
  if(!context) {
    throw new Error('Нет контекста');
  }
  const {isLoginForm, setIsLoginForm} = context;
  const submitButtonRef = useRef(null);
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(registrationFormScheme),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const formProp = isLoginForm
    ? { title: 'Вход', buttonText: 'Войти' }
    : { title: 'Регистрация', buttonText: 'Зарегистрироваться' };

  const onSubmit = (data: any) => {
    const { email, password } = data;
    console.log('submit', { email, password });
  };

  return (
    <StyledForm {...form} onSubmit={handleSubmit(onSubmit)}>
      <h2>{formProp.title}</h2>
      <InputsWrap>
        <FormInput
          register={register('email')}
          title={'E-mail'}
          placeholder="E-mail"
          type="email"
          errorMessage={errors.email?.message}
        />
        <FormInput
          register={register('password')}
          title={'Пароль'}
          placeholder="Пароль"
          type="password"
          errorMessage={errors.password?.message}
        />
        {!isLoginForm && (
          <FormInput
            register={register('repeatPassword')}
            title={'Повторите пароль'}
            placeholder="Пароль"
            type="password"
            errorMessage={errors.repeatPassword?.message}
          />
        )}
      </InputsWrap>
      <SwitchFormButton onClick={() => setIsLoginForm(!isLoginForm)}>
        {isLoginForm ? 'У меня ещё нет аккаунта' : 'У меня уже есть аккаунт'}
      </SwitchFormButton>
      <Button
        isLink={false}
        isSubmit={true}
        ref={submitButtonRef}
        text={isLoginForm ? 'Войти' : 'Зарегистрироваться'}
        btnColor={buttonColors.purple}
        isDisabled={isValid}
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
  height: 100%;
  width: 100%;

  color: var(--color-dark);

  background-color: var(--color-light-alt);
`;

const SwitchFormButton = styled.button`
  color: var(--color-purple);
  text-align: center;
  text-decoration: underline;
  font-weight: 700;

  background-color: transparent;

  border: none;
  border-radius: 0;

  &:hover {
    color: var(--color-purple-light);
  }
`;
