import Button from "../../6_shared/ui/Button"
import styled from "styled-components"
import theme from "../../1_app/ui/Theme"

interface loginSignUpProp {
    setIsLogin: (arg: boolean) => void,
    setIsSignUp: (arg: boolean) => void,
}

export default function LoginSignUp(prop: loginSignUpProp) {
    const {setIsLogin, setIsSignUp} = prop;
    return(
        <Container>
            <LoginButton text='Login' onclick={() => setIsLogin(true)}/>
            <SignUpButton text='Sign up' onclick={() => setIsSignUp(true)}/>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.text.activeMenuItemColor};
    font-weight: 700;
`

const LoginButton = styled(Button)`
    background-color: ${theme.headerBackground};
    font-weight: inherit;

`
const SignUpButton = styled(Button)`
    background-color: ${theme.headerBackground};
    border-color: ${theme.mainActiveColor};
    font-weight: inherit;

`
