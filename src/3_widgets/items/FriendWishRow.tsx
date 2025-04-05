import styled from 'styled-components';
import IWish from '../../5_entities/Wish/model/IWish';
import ListItemWrapper from '../../6_shared/ui/list/ListItemWrapper';
import ImageButton from '../../6_shared/ui/buttons/ImageButton';
import bookIcon from '../../assets/icons/addGiftIcon.svg';

interface FriendWishRowProps {
  data: IWish;
  actions: Record<string, () => void>
}

export default function FriendWishRow({data, actions}: FriendWishRowProps) {
  const { id, name } = data;
  console.log('wishData', data, id);

  return (
    <ListItemWrapper>
      <WishName>{name}</WishName>
      <ButtonWrapper>
        <ImageButton onClick={() => actions.booking()}>
        <img
            src={bookIcon}
            alt="Удалить пожелание"
            width="40px"
            height="40px"
            loading="lazy"
          />
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding-inline: 20px;
`;
