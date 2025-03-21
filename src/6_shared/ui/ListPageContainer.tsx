import styled from 'styled-components';

interface ListPageContainerProp {
  title: string;
  children: React.ReactNode;
}

export default function ListPageContainer({
  title,
  children,
}: ListPageContainerProp) {
  return (
    <Container>
      <h1 className='visually-hidden'>{title}</h1>
      {children}
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: var(--content-container-width);
  height: 100%;

  padding: 30px 0;

  /* background-color: var(--color-purple); */
`;
