import styled from "styled-components";
import theme from "../1_app/ui/Theme";

export default function Footer() {
    const date = new Date();
    return(
        <StyledFooter>
            ©{date.getFullYear()}
        </StyledFooter>
    )
};

const StyledFooter = styled.footer`
    text-align: center;
    padding: 0 0 20px 0;
    color: ${theme.colorPurpleLigth};
    font-weight: 600;
    font-size: 18px;
`