import styled from 'styled-components';
import LogoImg from '../../assets/images/logoWishCatcher.svg';
import ImageButton from './buttons/ImageButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = () => {
    if(location.pathname !== '/') {
      navigate('/')
    }
  }
  return (
    <ImageButton onClick={onClick}>
      <StyledImg src={LogoImg} alt="" loading="lazy" />
    </ImageButton>
  );
}

const StyledImg = styled.img`
  width: 193px;
  height: auto;

  @media (max-width: 1000px) {
    width: 19.3vw;
  }
`;
