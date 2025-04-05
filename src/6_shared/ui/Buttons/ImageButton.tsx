import styled from 'styled-components';
import Button, { buttonColors } from './Button';

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
  padding: 0;
  width: fit-content;
  height: fit-content;
  img {
    transition: fill 0.3s ease;
  }

  &:hover {
    background-color: transparent;

    img {
      fill-opacity: 60%;
      stroke-opacity: 60%;
    }
  }
`;
