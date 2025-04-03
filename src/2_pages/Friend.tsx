import styled from "styled-components";
import ListRenderer from "../4_features/ui/ListRenderer";
import Paging from "../4_features/ui/Paging";
import IUser from "../5_entities/User/model/IUser";
import Button, { buttonColors } from "../6_shared/ui/buttons/Button";
import ContentContainer from "../6_shared/ui/ContentContainer";
import EmptyListMessage from "../6_shared/ui/EmptyListMessage";
import PageBody from "../6_shared/ui/PageBody";
import PageWrapper from "../6_shared/ui/PageWrapper";
import FriendWidget from "../3_widgets/FriendWidget";
import { useState, useEffect } from "react";
import IWish from "../5_entities/Wish/model/IWish";
import { useNavigate } from "react-router-dom";
import getwishList from "../5_entities/Wish/getWishList";




export default function Friend(friend: IUser) {
    const [itemList, setItemList] = useState<IWish[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const {id, name, login, birthday} = friend;
  
    useEffect(() => {
      //TODO: перевести список на стейт и обновлять локально
  
      // вынужденный shit, чтобы успеть к релизу, иначе запрос списка шёл раньше, чем успевало
      // добавляться новое пожелание
      setTimeout(() => {
        getwishList(id).then((res) => {
          if (Array.isArray(res)) {
            setItemList(res);
          }
        });
      }, 0.01);
    }, []);




    return (
        <ContentContainer>
        <PageWrapper>
          <PageHeader>
            <h1 className="visually-hidden">Страница друга</h1>
            <FriendWidget
                name={name ?? login}
                birthday={birthday}
            />
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
                // onClick={onClickShare}
              >
                <ButtonContent>
                  {/* <img
                    src={shareIcon}
                    alt="Поделиться списком пожеланий"
                    width="16px"
                    height="16px"
                    loading="lazy"
                  /> */}
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
