import styled from 'styled-components';

export default function Loader() {
  return (
    <Container>
      <Circle>
        <MovingElement>🦄</MovingElement>
      </Circle>
      <span>Идет загрузка</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 15px;

  color: var(--color-light);
`

const Circle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: spin 2s ease-in-out infinite;

  box-shadow: 0 0 10px 10px var(--color-light-alt);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg); /* крутится влево */
    }
  }
`;

const MovingElement = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: counter-spin 2s linear infinite;

  font-size: 35px;

  @keyframes counter-spin {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg); /* компенсирует */
    }
  }
`;
