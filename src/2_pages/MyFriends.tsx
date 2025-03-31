import ContentContainer from "../6_shared/ui/ContentContainer";
import PageWrapper from "../6_shared/ui/PageWrapper";
import PageBody from "../6_shared/ui/PageBody";
import styled from "styled-components";


export default function MyFriends() {
  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Мои друзья</h1>
        </PageHeader>
        <PageBody>
          Привет
        </PageBody>
      </PageWrapper>
    </ContentContainer>
  );
}

const PageHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 60px;
`