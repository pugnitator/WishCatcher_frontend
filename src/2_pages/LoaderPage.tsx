import Loader from '../6_shared/ui/Loader';
import ContentContainer from '../6_shared/ui/ContentContainer';
import PageWrapper from '../6_shared/ui/PageWrapper';

export default function LoaderPage() {
  return (
    <ContentContainer>
      <PageWrapper>
        <Loader />
      </PageWrapper>
    </ContentContainer>
  );
}
