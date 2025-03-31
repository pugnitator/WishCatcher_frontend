import styled from "styled-components";

interface IPageWrapperProp {
    children: React.ReactNode;
  }

export default function PageWrapper({children}: IPageWrapperProp) {
    return(
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 100%;
  padding: 30px 0;
`;