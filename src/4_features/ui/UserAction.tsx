import styled from 'styled-components';
import userIcon from '../../assets/icons/userIcon.svg';
import { useNavigate } from 'react-router-dom';
import ImageButton from '../../6_shared/ui/buttons/ImageButton';
import { useAppSelector } from '../../5_entities/hooks/useAppSelector';

export function UserActions() {
  const user = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  return (
    <Container>
      <span>{user?.name ?? user?.login}</span>
      <ImageButton onClick={() => navigate('/my-profile')}>
        <StyledImg
          src={userIcon}
          alt="user icon"
          width="50px"
          height="50px"
          loading="lazy"
        />
      </ImageButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--color-purple);
`;

const StyledImg = styled.img`
  border-radius: 10px;
`;
