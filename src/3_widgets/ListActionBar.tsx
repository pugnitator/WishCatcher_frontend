import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function ListActionBar() {
    const currentPage = useLocation().hash;
    console.log(currentPage);

    return (
        <Container>
            Поиск
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    max-height: 60px;

    padding: 10px 20px;
    border-radius: 15px;

    background-color: var(--color-light);
`