import styled from "styled-components";

interface ListContainerProp{
    children: React.ReactNode;
}

export default function ListContainer({children}: ListContainerProp) {
    return (
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;

  border-radius: var(--border-radius-large);

  background-color: var(--color-light-alt);
`;