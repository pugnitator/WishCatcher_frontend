import styled from 'styled-components';
import Button, { buttonColors, ButtonProp } from './Button';

interface ImageButtonProp {
  children: React.ReactNode;
  onClick: () => void;
}

export default function ImageButton({ children, onClick }: ImageButtonProp) {
  return (
    <StyledButton
      isLink={false}
      btnColor={buttonColors.transparent}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: fit-content;
  aspect-ratio: 1;
  svg {
    transition: fill 0.3s ease;
  }

  &:hover {
    background-color: transparent;

    svg {
      fill-opacity: 60%;
      stroke-opacity: 60%;
    }
  }
`;
