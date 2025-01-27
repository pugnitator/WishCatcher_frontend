import styled from "styled-components";
import Button from "../6_shared/ui/Button";
import theme from "../1_app/ui/Theme";
import HomeImg from "../6_shared/ui/images/guestBackgroundImg.svg"

export default function Home() {

    return (
        <Container>
            <GreetingContainer>
                <h1>Помоги друзьям угадать с подарком</h1>
                <p>Создавайте списки желаний, делитесь с близкими и выбирайте идеальные подарки для праздников</p>
                <CallToActionButton text='Создать свой вишлист!' onclick={()=> console.log('Хочу вишлист!')} />
            </GreetingContainer>
            <Picture src={HomeImg} alt='presents and balloons'/>
        </Container>
    )
        
};


const Container = styled.div`
    display: flex;
    padding: 33px 12%;
    justify-content: space-between;
`;

const GreetingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
`;
const CallToActionButton = styled(Button)`
    background-color: ${theme.mainActiveColor};
    border: none;
    color: white;
`;

const Picture = styled.img`
    max-height: 500px;
    max-width: 500px;
`;