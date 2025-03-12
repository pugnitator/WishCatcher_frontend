import styled from 'styled-components';

type ButtonColor = {
  color?: string,
  bg?: string,
};

export const buttonColors = {
  purple: {color: 'var(--color-light)', bg: 'var(--color-purple)'},
  white: {color: 'var(--color-purple)', bg: 'transparent'},
  yellow: {color: 'var(--color-light)', bg: 'var(--color-yellow)'},
};

export interface buttonProp {
  isLink: boolean,
  path?: string,
  text?: string,
  onClick?: () => void,
  isSubmit?: boolean;
  className?: string,
  children?: React.ReactNode,
  btnColor: ButtonColor,
}

export default function Button(prop: buttonProp) {
  const { isLink, path, text, onClick, className, children, isSubmit, btnColor } = prop;
  const {color, bg} = btnColor;

  return isLink ? (
    <LinkWrap href={path} target="_blank">
      <ButtonWrap color={color} bg={bg} type='button'>{children ?? text}</ButtonWrap>
    </LinkWrap>
  ) : (
    <ButtonWrap bg={bg} color={color} onClick={onClick} className={className} type={isSubmit ? 'submit' : 'button'}>
      {children ?? text}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.button<ButtonColor>`
  height: 60px;
  color: ${({color}) => color ?? 'inherit'};
  font-size: 18px;
  background-color: ${({bg}) => bg ?? 'inherit'};
  &:hover {
    background-color: var(--color-purple-light);
  }
`;

const LinkWrap = styled.a`
  cursor: pointer;
`;
