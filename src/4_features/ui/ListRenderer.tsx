import styled from 'styled-components';
import IUser from '../../5_entities/User/model/IUser';
import IWish from '../../5_entities/Wish/model/IWish';
import { useEffect, useState } from 'react';
import SearchBar from '../../3_widgets/SearchBar';

export type TListItem = IWish | IUser;

interface ListRendererProp {
  itemList: TListItem[];
  Item: React.FC<any>;
  actions: Record<string, (props: any) => void>;
}

export default function ListRenderer({
  itemList,
  Item,
  actions,
}: ListRendererProp) {
  const [list, setList] = useState<TListItem[]>([]);

  useEffect(() => {
    setList(itemList);
  }, [itemList]);

  const onSearch = (value: string) => {
    if (value !== '') {
      const searchedItems = [...itemList].filter((item) =>
        item.name?.toLowerCase().includes(value.toLowerCase())
      );
      setList(searchedItems);
    }
  };

  const onCancelSearch = () => {
    setList(itemList);
  };

  return (
    <Container>
      <SearchBar onSearch={onSearch} onCancelSearch={onCancelSearch} />
      <List>
        {list.map((item, index) => (
          <Item key={`listItem_${index}`} data={item} actions={actions} />
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
