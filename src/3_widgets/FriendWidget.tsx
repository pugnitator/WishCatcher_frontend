import styled from 'styled-components';

interface FriendWidgetProp{
    name: string;
    birthday?: string;
}

export default function FriendWidget({ name, birthday } : FriendWidgetProp) {
  return (
    <Container>
      <img src="" alt="" width="" height="" loading="lazy" />
      <FriendInfo>
        <Title>{name}</Title>
        <Birthday>{`День рождения: ${birthday}`}</Birthday>
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

const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
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
