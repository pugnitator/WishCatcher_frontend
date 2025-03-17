import styled from "styled-components";

interface IListItemProp {
    children: React.ReactNode
};

export default function ListItem({children}: IListItemProp) {
 return(
    <Container>
        {children}
    </Container>
 )
};

const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 30px;

    background-color: var(--color-light);
`;