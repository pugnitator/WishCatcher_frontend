import styled from "styled-components";

interface FooterProp {
    isUserLogin: boolean;
}

export default function Footer({isUserLogin} : FooterProp) {

    const date = new Date();
    return(
        <StyledFooter isUserLogin={isUserLogin}>
            ©{date.getFullYear()}
        </StyledFooter>
    )
};

const StyledFooter = styled.footer<FooterProp>`
    text-align: center;
    padding: 0 0 20px 0;
    color: ${props => props.isUserLogin ? 'var(--color-light)' : 'var(--color-purple-light)'};
    font-weight: 600;
    width: 100%;
`;