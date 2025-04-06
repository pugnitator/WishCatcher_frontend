import styled from 'styled-components';
import IWish from '../../5_entities/Wish/model/IWish';
import ListItemWrapper from '../../6_shared/ui/list/ListItemWrapper';
import ImageButton from '../../6_shared/ui/buttons/ImageButton';
import deleteIcon from '../../assets/icons/DeleteIcon.svg';

interface MyWishRowProps {
  data: IWish;
  actions: Record<string, (props: any) => void>
}

export default function MyWishRow({data, actions}: MyWishRowProps) {
  const { id, name } = data;

  return (
    <ListItemWrapper>
      <WishName>{name}</WishName>
      <ButtonWrapper>
        <ImageButton onClick={() => actions.delete(id)}>
        <img
            src={deleteIcon}
            alt="Удалить пожелание"
            width="30px"
            height="30px"
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
