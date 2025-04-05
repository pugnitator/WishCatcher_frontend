import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import Button from '../6_shared/ui/buttons/Button';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import AccountForm from '../3_widgets/form/AccountForm';
import { useAppDispatch } from '../5_entities/hooks/useAppDispatch';
import { userSliceActions } from '../5_entities/User/userSlice';
import { AppContext } from '../1_app/App';

export default function MyAccount() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('MyWishes must be used within an AppContext.Provider');
  }

  const { setWishes } = context;
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    document.querySelector('form')?.requestSubmit();
  };

  const onClickExit = () => {
    sessionStorage.removeItem('authToken');
    dispatch(userSliceActions.removeUser());
    setWishes([]);
    navigate('/');
  };

  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Мой профиль</h1>
          <Buttons>
            {!isEdit ? (
              <Button
                isLink={false}
                btnColor={buttonColors.white}
                onClick={onClickEdit}
              >
                Редактировать
              </Button>
            ) : (
              <Button
                isLink={false}
                btnColor={buttonColors.white}
                onClick={onClickSave}
              >
                Сохранить
              </Button>
            )}
            {isEdit ? (
              <Button
                isLink={false}
                btnColor={buttonColors.whiteCancel}
                onClick={() => setIsEdit(false)}
              >
                Отмена
              </Button>
            ) : (
              <Button
                isLink={false}
                btnColor={buttonColors.whiteCancel}
                onClick={() => navigate(-1)}
              >
                Назад
              </Button>
            )}
          </Buttons>
        </PageHeader>
        <PageBody>
          <FormWrapper>
            <AccountForm isEdit={isEdit} onSuccess={() => setIsEdit(false)} />

            {!isEdit && (
              <Button
                isLink={false}
                btnColor={buttonColors.red}
                onClick={onClickExit}
              >
                Выйти из аккаунта
              </Button>
            )}
          </FormWrapper>
        </PageBody>
      </PageWrapper>
    </ContentContainer>
  );
}

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-grow: 1;

  width: var(--form-container-width);
  max-width: 530px;
`;
