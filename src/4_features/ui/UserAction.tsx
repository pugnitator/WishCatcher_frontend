import { useSelector } from "react-redux";
import { RootState } from "../../5_entities/store";
import styled from "styled-components";
import userIcon from "../../assets/icons/womanUserIcon.svg";

export function UserAction() {
    const userName = useSelector((state: RootState) => state.user.currentUser?.name);
    console.log(userName);

    return(
        <Container>
            {/* <span>{userName}</span> */}
            <span>Имя пользователя</span>
            <img src={userIcon} alt='woman' />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
    color: var(--color-purple);
`;