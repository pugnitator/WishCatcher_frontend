import styled from 'styled-components';
import IUser from '../../5_entities/User/model/IUser';
import IWish from '../../5_entities/Wish/model/IWish';

export type TListItem = IWish | IUser;

interface ListRendererProp {
  itemList: TListItem[];
  setItemList?: (newList: TListItem[]) => void;
  //TODO: разобраться, что тут писать вместо any
  Item: React.FC<any>;
}

export default function ListRenderer({
  itemList,
  setItemList,
  Item,
}: ListRendererProp) {
  return (
    <Container>
      <SearchBar>Поиск</SearchBar>
      <List>
        {itemList.map((item, index) => (
          <Item key={`listItem_${index}`} data={item} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  gap: 30px;

  width: 100%;
`;

const SearchBar = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  width: 100%;
`;
