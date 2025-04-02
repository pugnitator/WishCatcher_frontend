import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ListRenderer, { TListItem } from '../4_features/ui/ListRenderer';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import MyWishRow from '../3_widgets/items/MyWishRow';
import EmptyListMessage from '../6_shared/ui/EmptyListMessage';
import getMyWishes from '../5_entities/Wish/getMyWishes';
import Button from '../6_shared/ui/buttons/Button';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';
import shareIcon from '../assets/icons/shareIcon.svg';
import { Outlet } from 'react-router-dom';
import deleteWish from '../5_entities/Wish/deleteWish';
import Paging from '../4_features/ui/Paging';
import SearchBar from '../3_widgets/SearchBar';

export default function MyWishes() {
  const [itemList, setItemList] = useState<TListItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getMyWishes().then((res) => {
      if (Array.isArray(res)) {
        console.log('wishes', res);
        setItemList(res);
      }
    });
  }, []);

  const itemsPerPage = 6;
  const pagesNumber = Math.ceil(itemList.length / itemsPerPage);

  const currentItemList = itemList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onClickShare = () => {
    console.log('Делимся');
  };

  const wishActions = {
    delete: (wishId: string) => {
      deleteWish(wishId);
      setItemList((prevList) => prevList.filter((wish) => wish.id !== wishId));
    },
  };

  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Мои пожелания</h1>
          <Buttons>
            <Button
              isLink={false}
              btnColor={buttonColors.white}
              onClick={() => navigate('/CreateWish')}
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
          {itemList.length > 0 ? (
            <ListContainer>
              <ListRenderer
                itemList={currentItemList}
                Item={MyWishRow}
                actions={wishActions}
              />
              {itemList.length > itemsPerPage && (
                <Paging totalPages={pagesNumber} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
              )}
            </ListContainer>
          ) : (
            <EmptyListMessage />
          )}
        </PageBody>
      </PageWrapper>
      <Outlet />
    </ContentContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 30px;

  width: 100%;
  height: 100%;
`;

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
