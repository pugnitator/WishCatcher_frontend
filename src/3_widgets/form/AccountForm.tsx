import { useForm } from 'react-hook-form';
import store from '../../5_entities/store';
import { useNavigate } from 'react-router-dom';
import updateUser from '../../5_entities/User/asyncActions/updateUser';
import FormInput from '../../6_shared/ui/form/FormInput';
import styled from 'styled-components';
import { useAppDispatch } from '../../5_entities/hooks/useAppDispatch';

interface AccountFormProp {
  isEdit: boolean;
  onSuccess: (arg: boolean) => void;
}

type AccountFormValues = {
  login: string;
  name: string;
};

export default function AccountForm({isEdit, onSuccess} : AccountFormProp) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = store.getState().user?.currentUser;

  if (!user) {
    navigate('/');
    throw new Error('AccountForm. Пользователь не найден');
  }

  const { login, name } = user;

  const form = useForm<AccountFormValues>({
    mode: 'onTouched',
    defaultValues: {
      login: login,
      name: name,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: AccountFormValues) => {
    try {
      await dispatch(updateUser(data)).unwrap();
      onSuccess(false);
    } catch (e) {
      console.log('Ошибка редактирования', e);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register('login', {
          minLength: {
            value: 4,
            message: 'В email должно быть не менее 4х символов',
          },
          maxLength: {
            value: 100,
            message: 'В email должно быть не более 20 символов',
          },
          pattern: {
            value: /^[\w\._]+@[a-z]+\.[a-z]{2,}$/,
            message: 'Форма записи example@example.domain. Допустимые символы: a-z A-Z 0-9 _',
          },
        })}
        title={'Логин'}
        placeholder={login}
        errorMessage={errors.login?.message}
        disabled={!isEdit}
      />
      <FormInput
        register={register('name', {
          minLength: {
            value: 3,
            message: 'Минимальная длина имени - 3 символа',
          },
          maxLength: {
            value: 50,
            message: 'Максимальная длина имени - 50 символов',
          },
        })}
        title={'Имя'}
        placeholder={name ?? 'Имя не задано'}
        errorMessage={errors.name?.message}
        disabled={!isEdit}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 530px;
  color: var(--color-dark);
  background-color: var(--color-light-alt);
`;
