import styled from 'styled-components';
import IWish from '../../5_entities/Wish/model/IWish';
import ListItemWrapper from '../../6_shared/ui/list/ListItemWrapper';
import ImageButton from '../../6_shared/ui/buttons/ImageButton';

interface MyWishRowProps {
  data: IWish;
  actions: Record<string, (props: any) => void>
}

export default function MyWishRow({data, actions}: MyWishRowProps) {
  const { id, name } = data;
  console.log('wishData', data, id);

  return (
    <ListItemWrapper>
      <WishName>{name}</WishName>
      <ButtonWrapper>
        <ImageButton onClick={() => actions.delete(id)}>
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.25 6.75V5.5C21.25 3.42893 19.5711 1.75 17.5 1.75H12.5C10.4289 1.75 8.75 3.42893 8.75 5.5V6.75M1.25 6.75H28.75M18.75 14.25V20.5M11.25 14.25V20.5M3.75 6.75H26.25L25.4219 23.3121C25.2556 26.6384 22.5102 29.25 19.1797 29.25H10.8203C7.48984 29.25 4.74442 26.6384 4.57811 23.3121L3.75 6.75Z"
              stroke="#C94E70"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </ImageButton>
      </ButtonWrapper>
    </ListItemWrapper>
  );
}

const WishName = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 60px;
`;
