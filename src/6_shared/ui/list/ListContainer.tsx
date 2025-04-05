import styled from 'styled-components';

interface ListContainerProp {
  children: React.ReactNode;
}

export default function ListContainer({ children }: ListContainerProp) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  flex-grow: 1;

  gap: 30px;

  width: 100%;
  height: 100%;
`;