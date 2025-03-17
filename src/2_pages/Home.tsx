import styled from 'styled-components';
import Button from '../6_shared/ui/buttons/Button';
import theme from '../1_app/ui/Theme';
import HomeImg from '../assets/images/guestBackgroundImg.svg';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { useContext } from 'react';
import { AppContext } from '../1_app/App';

export default function Home() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext null');
  }
  const { setIsModalActive } = context;
  return (
    <Container>
      <GreetingContainer>
        <h1>
          Помоги друзьям
          <br />
          угадать
          <br />с подарком
        </h1>
        <TextContainer>
          Создавай списки желаний, делись ими <br />с близкими и выбирай
          идеальные подарки для праздников
        </TextContainer>
        <Button
          isLink={false}
          text="Создать свой вишлист!"
          onClick={() => setIsModalActive(true)}
          btnColor={buttonColors.purple}
        />
      </GreetingContainer>
      <Picture src={HomeImg} alt="presents and balloons" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(30px, 6.25vw, 90px);
  
  width: var(--content-container-width);
`;

const GreetingContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(20px, 3.9vw, 50px);
  min-width: 350px;
  max-height: 500px;
`;


const Picture = styled.img`
  width: clamp(350px, 39vw, 500px);
  aspect-ratio: 1;
  opacity: 60%;
`;

const TextContainer = styled.div`
  color: ${theme.colorPurpleLigth};
  line-height: 120%;
`;
