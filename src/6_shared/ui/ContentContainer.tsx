import styled from "styled-components"

interface IContentContainer {
    children: React.ReactNode
};

export default function ContentContainer({children}: IContentContainer) {
    return(
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    min-width: 800px;

    padding-inline: 50px;
`;