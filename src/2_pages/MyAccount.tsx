import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import Button from '../6_shared/ui/buttons/Button';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import ImageButton from '../6_shared/ui/buttons/ImageButton';
import styled from 'styled-components';
import { useState } from 'react';
import store from '../5_entities/store';
import AccountForm from '../3_widgets/form/AccountForm';
import IUser from '../5_entities/User/model/IUser';

export default function MyAccount() {
  const user = store.getState().user.currentUser;
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    document.querySelector('form')?.requestSubmit();
  };

  const navigate = useNavigate();
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
            <Button
              isLink={false}
              btnColor={buttonColors.whiteCancel}
              onClick={() => navigate(-1)}
            >
              Назад
            </Button>
          </Buttons>
        </PageHeader>
        <PageBody>
          <AccountForm isEdit={isEdit}/>
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
