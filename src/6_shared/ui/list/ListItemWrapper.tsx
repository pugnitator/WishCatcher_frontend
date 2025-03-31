import styled from "styled-components";

interface IListItemWrapperProp {
    children: React.ReactNode;
  }

export default function ListItemWrapper({children} : IListItemWrapperProp) {
    return(
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 65px;

    padding-inline: 20px 0px;

    background-color: var(--color-light);
    border-radius: var(--border-radius);
`