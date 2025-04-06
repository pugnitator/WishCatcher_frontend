import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FormInput from '../../6_shared/ui/form/FormInput';
import FormTextarea from '../../6_shared/ui/form/FormTextArea';
import createWish from '../../5_entities/Wish/addWish';
import IWish from '../../5_entities/Wish/model/IWish';

type FormValues = {
  name: string;
  link?: string;
  comment?: string;
};

interface CreateWishFormProps {
  onSuccess: (newWish: IWish) => void;
}

export default function CreateWishForm({ onSuccess }: CreateWishFormProps) {
  const form = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormValues) => {
    try {
      const newWish = await createWish({ ...data });
      onSuccess(newWish);
    } catch (e) {
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register('name', {
          required: 'Обязательно для заполнения',
          minLength: {
            value: 3,
            message: 'Минимальная длина названия - 3 символа',
          },
          maxLength: {
            value: 50,
            message: 'Максимальная длина названия - 50 символов',
          },
        })}
        title={'Название пожелания'}
        placeholder="Название"
        errorMessage={errors.name?.message}
      />
      <FormInput
        register={register('link', {
          pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
            message: 'Неверный формат URL',
          },
        })}
        title={'Ссылка на пожелание'}
        placeholder="https://aliexpress.ru/item/1005008665763250.html"
        type="url"
        errorMessage={errors.link?.message}
      />
      <FormTextarea
        register={register('comment', {
          maxLength: {
            value: 1000,
            message: 'Максимальная длина комментария - 1000 символов',
          },
        })}
        title={'Комментарий'}
        placeholder="Комментарий"
        errorMessage={errors.comment?.message}
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
