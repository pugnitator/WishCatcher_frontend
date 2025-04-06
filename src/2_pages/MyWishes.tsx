import styled from 'styled-components';
import { useState, useContext } from 'react';
import ListRenderer from '../4_features/ui/ListRenderer';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import MyWishRow from '../3_widgets/items/MyWishRow';
import EmptyListMessage from '../6_shared/ui/EmptyListMessage';
import Button from '../6_shared/ui/buttons/Button';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import shareIcon from '../assets/icons/shareIcon.svg';
import deleteWish from '../5_entities/Wish/deleteWish';
import Paging from '../4_features/ui/Paging';
import { AppContext } from '../1_app/App';
import ListContainer from '../6_shared/ui/list/ListContainer';
import Modal from '../3_widgets/modals/Modal';
import Loader from '../6_shared/ui/Loader';

export default function MyWishes() {
  const [isModalOpen, setIsModalOpen ] = useState(false);
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  if (!context) {
    throw new Error('MyWishes must be used within an AppContext.Provider');
  }

  const { wishes, setWishes, fetchWishes } = context;

  if(wishes.length < 1) {
    fetchWishes();
  }

  const itemsPerPage = 5;
  const pagesNumber = Math.ceil(wishes.length / itemsPerPage);

  const currentwishes = wishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onClickShare = () => {
    setIsModalOpen(true);
  };

  const wishActions = {
    delete: (wishId: string) => {
      deleteWish(wishId)
        .then(() => {
          setWishes(wishes.filter((wish) => wish.id !== wishId));
        })
        .catch((e) => {
          console.error('Ошибка при удалении:', e);
          fetchWishes();
        });
    },
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContentContainer>
        <PageWrapper>
          <PageHeader>
            <h1>Мои пожелания</h1>
            <Buttons>
              <Button
                isLink={false}
                btnColor={buttonColors.white}
                onClick={() => navigate('/create-wish')}
              >
                + Создать пожелание
              </Button>
              <Button
                isLink={false}
                btnColor={buttonColors.yellow}
                onClick={onClickShare}
              >
                <ButtonContent>
                  <img
                    src={shareIcon}
                    alt="Поделиться списком пожеланий"
                    width="16px"
                    height="16px"
                    loading="lazy"
                  />
                  <span>Поделиться</span>
                </ButtonContent>
              </Button>
            </Buttons>
          </PageHeader>
          <PageBody>
            {wishes.length > 0 ? (
              <ListContainer>
                <ListRenderer
                  itemList={currentwishes}
                  Item={MyWishRow}
                  actions={wishActions}
                />
                {wishes.length > itemsPerPage && (
                  <Paging
                    totalPages={pagesNumber}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
              </ListContainer>
            ) : (
              <EmptyListMessage />
            )}
          </PageBody>
        </PageWrapper>
      </ContentContainer>
      <Modal isActive={isModalOpen} closeModal={onCloseModal}>
        <Loader text={'Этот функционал в разработке'}/>
      </Modal>
    </>
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

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
