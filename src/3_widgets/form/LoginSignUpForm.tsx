import { useRef, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { registrationFormScheme } from '../../6_shared/ui/form/registrationFormScheme';
import { loginFormScheme } from '../../6_shared/ui/form/loginFormScheme';
import { AppContext } from '../../1_app/App';
import Button, { buttonColors } from '../../6_shared/ui/buttons/Button';
import FormInput from '../../6_shared/ui/form/FormInput';
import registration from '../../5_entities/User/asyncActions/registration';
import { useAppDispatch } from '../../5_entities/hooks/useAppDispatch';
import login from '../../5_entities/User/asyncActions/login';
import { userSliceActions } from '../../5_entities/User/userSlice';

type FormValues = {
  email: string;
  password: string;
  repeatPassword?: string;
};

export function LoginSignUpForm() {
  const context = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  if (!context) {
    throw new Error('AppContext null');
  }
  const { isLoginForm, setIsLoginForm, setIsModalOpen } = context;
  const dispatch = useAppDispatch();

  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const form = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: isLoginForm
      ? {
          email: '',
          password: '',
        }
      : {
          email: '',
          password: '',
          repeatPassword: '',
        },
    resolver: yupResolver(
      isLoginForm ? loginFormScheme : registrationFormScheme
    ) as Resolver<FormValues>,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const formProp = isLoginForm
    ? { title: 'Вход', buttonText: 'Войти' }
    : { title: 'Регистрация', buttonText: 'Зарегистрироваться' };

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    try {
      let result;

      if (isLoginForm) {
        result = await dispatch(login({ login: email, password })).unwrap();
      } else {
        result = await dispatch(
          registration({ login: email, password })
        ).unwrap();
        context.setIsLoginForm(true);
      }

      if (result?.token && result?.user) {
        sessionStorage.setItem('authToken', result.token);
        dispatch(userSliceActions.setUser(result.user));
        setErrorMessage(null);
        setIsModalOpen(false);
      } else {
        setErrorMessage(result?.message || 'Что-то пошло не так');
      }
    } catch (error) {
      console.error('Ошибка', error);
      setErrorMessage(
        typeof error === 'string' ? error : 'Что-то пошло не так'
      );
      return;
    }
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
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const ErrorMessage = styled.span`
  text-align: center;
  color: var(--color-red);
`;
