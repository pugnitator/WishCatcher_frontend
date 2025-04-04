import styled from 'styled-components';
import userIcon from '../assets/icons/userIcon.svg';

interface FriendWidgetProp{
    name: string;
    birthday?: string;
}

export default function FriendWidget({ name, birthday } : FriendWidgetProp) {
  return (
    <Container>
      <StyledImg src={userIcon} alt="" width="60" height="60" loading="lazy" />
      <FriendInfo>
        <Title>{name}</Title>
        <Birthday>{`День рождения: ${birthday ?? 'нинаю'}`}</Birthday>
      </FriendInfo>
    </Container>
  );
};

const Container = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--color-light);
`;

const StyledImg = styled.img`
  border: var(--border);
  border-radius: 15px;
`

const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5px;
`;

const Birthday = styled.span`
    font-size: 16px;
`

const Title = styled.span`
  font-size: var(--h1-font-size);
  color: var(--h1-color);
  font-weight: var(--h1-weight);
`;
