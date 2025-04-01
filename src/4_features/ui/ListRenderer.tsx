import styled from 'styled-components';
import IUser from '../../5_entities/User/model/IUser';
import IWish from '../../5_entities/Wish/model/IWish';

export type TListItem = IWish | IUser;

interface ListRendererProp {
  itemList: TListItem[];
  Item: React.FC<any>;
  actions: Record<string, (props: any) => void>
}

export default function ListRenderer({
  itemList,
  Item,
  actions,
}: ListRendererProp) {
  return (
    <Container>
      <SearchBar>Поиск</SearchBar>
      <List>
        {itemList.map((item, index) => (
          <Item key={`listItem_${index}`} data={item} actions={actions}/>
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
