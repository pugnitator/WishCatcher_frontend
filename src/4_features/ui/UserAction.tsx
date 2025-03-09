import { useSelector } from "react-redux";
import { RootState } from "../../5_entities/store";
import styled from "styled-components";
import userIcon from "../../../src/6_shared/ui/icons/womanUserIcon.svg";
import theme from "../../1_app/ui/Theme";

export function UserAction() {
    const userName = useSelector((state: RootState) => state.user.currentUser?.name);
    console.log(userName);

    return(
        <Container>
            <span>{userName}</span>
            <img src={userIcon} alt='woman' />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    color: ${theme.colorPurpleLigth};
`;