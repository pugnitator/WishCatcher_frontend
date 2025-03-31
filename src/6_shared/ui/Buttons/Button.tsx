import styled from 'styled-components';

type ButtonColor = {
  color?: string;
  bg?: string;
};

export const buttonColors = {
  purple: { color: 'var(--color-light)', bg: 'var(--color-purple)' },
  white: { color: 'var(--color-purple)', bg: 'var(--color-light)' },
  whiteCancel: { color: 'var(--color-red)', bg: 'var(--color-light)' },
  yellow: { color: 'var(--color-purple)', bg: 'var(--color-yellow)' },
  transparent: { color: 'transparent', bg: 'transparent' },
};

export interface ButtonProp {
  isLink: boolean;
  link?: string;
  text?: string;
  onClick?: () => void;
  isSubmit?: boolean;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  btnColor: ButtonColor;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

export default function Button(prop: ButtonProp) {
  const {
    isLink,
    link,
    text,
    onClick,
    className,
    children,
    isSubmit,
    btnColor,
  } = prop;
  const { color, bg } = btnColor;

  const onClickButton = () => {
    console.log('куку');
    onClick?.();
  }

  return isLink ? (
    <LinkWrap href={link} target="_blank">
      <ButtonWrap color={color} bg={bg} type="button">
        {children ?? text}
      </ButtonWrap>
    </LinkWrap>
  ) : (
    <ButtonWrap
      bg={bg}
      color={color}
      onClick={onClickButton}
      className={className}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children ?? text}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.button<ButtonColor>`
  height: 60px;
  color: ${({ color }) => color ?? 'inherit'};
  font-size: 18px;
  background-color: ${({ bg }) => bg ?? 'inherit'};
  &:hover {
    background-color: var(--color-purple-light);
  }
`;

const LinkWrap = styled.a`
  cursor: pointer;
`;
