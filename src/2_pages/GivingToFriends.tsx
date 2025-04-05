import styled from 'styled-components';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';
import PageBody from '../6_shared/ui/PageBody';
import Loader from '../6_shared/ui/Loader';

export default function GivingToFriends() {
  return (
    <ContentContainer>
      <PageWrapper>
        <PageHeader>
          <h1>Дарю друзьям</h1>
        </PageHeader>
        <PageBody>
          <Wrapper>
            <Loader
              text={'Функционал бронирования подарков находится в разработке'}
              shadowColor={'var(--color-light)'}
            />
          </Wrapper>
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`
