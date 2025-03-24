import * as yup from 'yup';

const emailRegex = /^[\w\._]+@[a-z]+\.[a-z]{2,}$/;

export const registrationFormScheme = yup
  .object()
  .required()
  .shape({
    email: yup
      .string()
      .min(4, 'В email должно быть не менее 4х символов')
      .max(20, 'В email должно быть не более 20 символов')
      .matches(
        emailRegex,
        'Форма записи example@example.domain. Допустимые символы: a-z A-Z 0-9 _'
      ),
    password: yup
      .string()
      .min(4, 'В пароле должно быть не менее 4х символов')
      .max(20, 'В пароле должно быть не более 20 символов'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Не совпадает с полем "password"'),
  });
