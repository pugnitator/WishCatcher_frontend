import styled from 'styled-components';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import Button, { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import CreateWishForm from '../3_widgets/form/CreateWishForm';
import { AppContext } from '../1_app/App';
import { useContext } from 'react';
import IWish from '../5_entities/Wish/model/IWish';

export default function CreateWish() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('CreateWish must be used within an AppContext.Provider');
  }

  const { setWishes, wishes } = context;

  const onClickSave = () => {
    document.querySelector('form')?.requestSubmit();
  };

  const handleWishCreated = (wish: IWish) => {
    setWishes([wish, ...wishes]);
    navigate('/my-wishes', { state: { refresh: true } });
  };

  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Создание пожелания</h1>
          <Buttons>
            <Button
              isLink={false}
              btnColor={buttonColors.white}
              onClick={onClickSave}
            >
              Сохранить
            </Button>
            <Button
              isLink={false}
              btnColor={buttonColors.whiteCancel}
              onClick={() => navigate(-1)}
            >
              Отмена
            </Button>
          </Buttons>
        </PageHeader>
        <PageBody>
          <CreateWishForm onSuccess={handleWishCreated}/>
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
