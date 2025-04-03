import styled from 'styled-components';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import Button, { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import CreateWishForm from '../3_widgets/form/CreateWishForm';

export default function CreateWish() {
  const navigate = useNavigate();
  const onClickSave = () => {
    document.querySelector('form')?.requestSubmit();
    navigate(-1);
  }
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
          <CreateWishForm />
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
