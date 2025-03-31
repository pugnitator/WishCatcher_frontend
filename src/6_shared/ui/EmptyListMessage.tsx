import styled from "styled-components"

export default function EmptyListMessage() {
    return(
        <Container>
            <span>
                Этот список пока что пуст
            </span>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    /* background-image: ; */
`