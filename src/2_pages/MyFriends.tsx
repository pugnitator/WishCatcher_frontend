import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import styled from 'styled-components';
import ListRenderer from '../4_features/ui/ListRenderer';
import { useState, useEffect } from 'react';
import IUser from '../5_entities/User/model/IUser';
import { getMyFriends } from '../5_entities/friendsApi/getMyFriends';
import MyFriendRow from '../3_widgets/items/MyFriendRow';
import Paging from '../4_features/ui/Paging';
import EmptyListMessage from '../6_shared/ui/EmptyListMessage';
import { deleteFriend } from '../5_entities/friendsApi/deleteFriend';
import { useNavigate } from 'react-router-dom';
import ListContainer from '../6_shared/ui/list/ListContainer';

export default function MyFriends() {
  const [itemList, setItemList] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    //TODO: перевести список на стейт и обновлять локально
    // вынужденный shit
    setTimeout(() => {
      getMyFriends().then((res) => {
        if (Array.isArray(res)) {
          console.log('список друзей', res)
          setItemList(res);
        }
      });
    }, 0.01);
  }, []);

  const itemsPerPage = 6;
  const pagesNumber = Math.ceil(itemList.length / itemsPerPage);

  const currentItemList = itemList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const friendActions = {
    delete: (friendId: string) => {
      deleteFriend(friendId);
      setItemList((prevList) =>
        prevList.filter((friend) => friend.id !== friendId)
      );
    },
    open: (friendId: string) => {
      console.log('---NAVIGATE FRIEND---', friendId, new Date().toISOString());
      navigate(`/friend/${friendId}`);
    },
  };

  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Мои друзья</h1>
        </PageHeader>
        <PageBody>
          {itemList.length > 0 ? (
            <ListContainer>
              <ListRenderer
                itemList={currentItemList}
                Item={MyFriendRow}
                actions={friendActions}
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
    </ContentContainer>
  );
}

const PageHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 60px;
`;
