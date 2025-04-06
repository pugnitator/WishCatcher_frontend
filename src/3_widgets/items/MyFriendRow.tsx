import IUser from '../../5_entities/User/model/IUser';
import styled from 'styled-components';
import ListItemWrapper from '../../6_shared/ui/list/ListItemWrapper';
import ImageButton from '../../6_shared/ui/buttons/ImageButton';
import userIcon from '../../assets/icons/userIcon.svg';
import goToListIcon from '../../assets/icons/viewFrindListIcon.svg';
import deleteIcon from '../../assets/icons/DeleteIcon.svg';
import React from 'react';

interface MyFriendRowProps {
  data: IUser;
  actions:   {
    delete: (friendId: string) => void;
    open: (friendId: string) => void;
  };
}

function MyFriendRow({ data, actions }: MyFriendRowProps) {
  const { id, name, login } = data;

  return (
    <ListItemWrapper>
      <Name>
        <img src={userIcon} alt="" width="40px" height="40px" loading="lazy" />
        <span>{name ?? login}</span>
      </Name>
      <ButtonWrapper>
        <ImageButton onClick={() => actions.open(id)}>
          <img
            src={goToListIcon}
            alt="Перейти к списку пожеланий друга"
            width="45px"
            height="30px"
            loading="lazy"
          />
        </ImageButton>
        <ImageButton onClick={() => actions.delete(id)}>
          <img
            src={deleteIcon}
            alt="Удалить друга"
            width="30px"
            height="30px"
            loading="lazy"
          />
        </ImageButton>
      </ButtonWrapper>
    </ListItemWrapper>
  );
}

const Name = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  align-items: center;

  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding-inline: 20px;
`;

export default React.memo(MyFriendRow);