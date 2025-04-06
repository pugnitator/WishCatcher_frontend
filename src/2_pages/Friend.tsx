import styled from 'styled-components';
import ListRenderer from '../4_features/ui/ListRenderer';
import Paging from '../4_features/ui/Paging';
import Button, { buttonColors } from '../6_shared/ui/buttons/Button';
import ContentContainer from '../6_shared/ui/ContentContainer';
import EmptyListMessage from '../6_shared/ui/EmptyListMessage';
import PageBody from '../6_shared/ui/PageBody';
import PageWrapper from '../6_shared/ui/PageWrapper';
import FriendWidget from '../3_widgets/FriendWidget';
import { useState, useEffect } from 'react';
import IWish from '../5_entities/Wish/model/IWish';
import { useNavigate, useParams } from 'react-router-dom';
import getwishList from '../5_entities/Wish/getWishList';
import useGetFriend from '../5_entities/hooks/useGetFriend';
import store from '../5_entities/store';
import Loader from '../6_shared/ui/Loader';
import ListContainer from '../6_shared/ui/list/ListContainer';
import { useAppDispatch } from '../5_entities/hooks/useAppDispatch';
import { useAppSelector } from '../5_entities/hooks/useAppSelector';
import updateUser from '../5_entities/User/asyncActions/updateUser';
import FriendWishRow from '../3_widgets/items/FriendWishRow';
import Modal from '../3_widgets/modals/Modal';
import { deleteFriend } from '../5_entities/friendsApi/deleteFriend';

export default function Friend() {

  const [itemList, setItemList] = useState<IWish[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMyFriend, setIsMyFriend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { user, loading } = useGetFriend({ idFromParams: id || '' });
  const owner = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user) {
      const currentUser = store.getState();
      setIsMyFriend(
        currentUser?.user?.currentUser?.friends?.includes(user.id) ?? false
      );
      //TODO: перевести список на стейт и обновлять локально
      // вынужденный shit
      setTimeout(() => {
        getwishList(user.id)
          .then((res) => {
            if (Array.isArray(res)) {
              setItemList(res);
            }
          })
          .catch((err) => console.error('Ошибка в getwishList:', err));
      }, 0.01);
    }
  }, [user, owner]);

  if (!id) {
    navigate('/');
    throw new Error('В параметрах нет id юзера');
  }

  if (loading) {
    return (
      <ContentContainer>
        <PageWrapper>
          <Loader />;
        </PageWrapper>
      </ContentContainer>
    );
  }

  if (!user) {
    console.error('Пользователь не загружен');
    throw new Error('Не удалось получить данные юзера');
  }

  const { name, login, birthday } = user;

  const itemsPerPage = 5;
  const pagesNumber = Math.ceil(itemList.length / itemsPerPage);

  const currentItemList = itemList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onClickAddFriend = () => {
    if (!owner || !id) return;

    const updatedFriends = [...(owner.friends || []), id];
    dispatch(updateUser({ friends: updatedFriends }))
      .unwrap()
      .then(() => {
        setIsMyFriend(true);
      })
      .catch((err) => console.error('Ошибка добавления друга:', err));
  };

  const onClickDelete = () => {
    deleteFriend(id);
    setIsMyFriend(false);
  }

  const wishActions = {
    booking: () => {
      setIsModalOpen(true);
    },
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContentContainer>
      <>
        <PageWrapper>
          <PageHeader>
            <h1 className="visually-hidden">Страница друга</h1>
            <FriendWidget name={name ?? login} birthday={birthday} />
            <Buttons>
              {isMyFriend ? (
                <Button
                  isLink={false}
                  btnColor={buttonColors.whiteCancel}
                  onClick={onClickDelete}
                >
                  Удалить из друзей
                </Button>
              ) : (
                <Button
                  isLink={false}
                  btnColor={buttonColors.white}
                  onClick={onClickAddFriend}
                >
                  + Добавить в друзья
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
            {itemList.length > 0 ? (
              <ListContainer>
                <ListRenderer
                  itemList={currentItemList}
                  Item={FriendWishRow}
                  actions={wishActions}
                />
                {itemList.length > itemsPerPage && (
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
        <Modal isActive={isModalOpen} closeModal={onCloseModal}>
          <Loader text={'Этот функционал в разработке'} />
        </Modal>
      </>
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

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
