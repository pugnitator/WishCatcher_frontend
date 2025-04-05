import styled from 'styled-components';
import Button from '../6_shared/ui/buttons/Button';
import theme from '../1_app/ui/Theme';
import HomeImg from '../assets/images/guestBackgroundImg.svg';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useContext } from 'react';
import { AppContext } from '../1_app/App';
import ContentContainer from '../6_shared/ui/ContentContainer';

export default function Home() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext null');
  }
  const { setIsModalOpen } = context;
  return (
    <ContentContainer>
      <Container>
        <h1 className='visually-hidden'>Greeting page</h1>
        <GreetingContainer>
          <Title>
            Помоги друзьям
            <br />
            угадать
            <br />с подарком
          </Title>
          <TextContainer>
            Создавай списки желаний, делись ими <br />с близкими и выбирай
            идеальные подарки для праздников
          </TextContainer>
          <Button
            isLink={false}
            text="Создать свой вишлист!"
            onClick={() => setIsModalOpen(true)}
            btnColor={buttonColors.purple}
          />
        </GreetingContainer>
        <Picture src={HomeImg} alt="presents and balloons" />
      </Container>
    </ContentContainer>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(30px, 6.25vw, 90px);

  width: 100%;
  height: 100%;
`;

const GreetingContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(20px, 3.9vw, 50px);
  min-width: 350px;
  max-height: 500px;
`;

const Title = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 600;
`

const Picture = styled.img`
  width: clamp(350px, 39vw, 500px);
  aspect-ratio: 1;
  opacity: 60%;
`;

const TextContainer = styled.div`
  color: ${theme.colorPurpleLigth};
  line-height: 120%;
`;
