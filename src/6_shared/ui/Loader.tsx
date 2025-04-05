import styled from 'styled-components';

interface LoaderProp {
  text?: string|null;
  shadowColor?: string|null;
}

export default function Loader({text, shadowColor} : LoaderProp) {
  return (
    <Container>
      <Circle shadowColor={shadowColor}>
        <MovingElement>🦄</MovingElement>
      </Circle>
      <span>{text ?? 'Идет загрузка'}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  color: var(--color-purple);
`

const Circle = styled.div<LoaderProp>`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: spin 2s ease-in-out infinite;

  background-color: var(--color-light);
  box-shadow: 0 0 20px 10px var(--color-light);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
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
      transform: translateX(-50%) rotate(360deg);
    }
  }
`;
