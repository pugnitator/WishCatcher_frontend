import styled from 'styled-components';
import LogoImg from '../../assets/images/logoWishCatcher.svg';

export default function Logo() {
  return <StyledImg src={LogoImg} alt="" loading="lazy" />;
}

const StyledImg = styled.img`
  width: 193px;
  height: auto;

  @media(max-width: 1000px) {
    width: 19.3vw;
  }
`;