import styled from "styled-components";
import Button from "../6_shared/ui/Button";
import theme from "../1_app/ui/Theme";
import HomeImg from "../assets/images/guestBackgroundImg.svg"

export default function Home() {

    return (
        <Container>
            <GreetingContainer>
                <StyledH1>Помоги друзьям <br />угадать<br /> с подарком</StyledH1>
                <TextContainer>
                    <p>Создавай списки желаний, делись ими с близкими и выбирай идеальные подарки для праздников</p>
                </TextContainer>
                <CallToActionButton text='Создать свой вишлист!' onClick={()=> console.log('Хочу вишлист!')} />
            </GreetingContainer>
            <Picture src={HomeImg} alt='presents and balloons'/>
        </Container>
    )     
};

const Container = styled.div`
    display: flex;
    padding: 33px 12%;
    justify-content: space-between;
    align-self: center;
    max-width: 1080px;
`;

const GreetingContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    max-height: 500px;
    padding: 0 10px;
`;

const CallToActionButton = styled(Button)`
    max-width: 60%;
    background-color: ${theme.colorPurple};
    border: none;
    color: white;
`;

const Picture = styled.img`
    max-height: 500px;
    max-width: 500px;
    opacity: 60%;
`;

const StyledH1 = styled.h1`
    /* font-size: 56px; */
    color: ${theme.colorDark};
`

const TextContainer = styled.div`
    max-width: 60%;
    color: ${theme.colorPurpleLigth};
    line-height: 120%;
`