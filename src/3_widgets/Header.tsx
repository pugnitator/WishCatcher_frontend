import styled from 'styled-components';
import Logo from '../6_shared/ui/Logo';
import MenuItem from '../6_shared/ui/menu/MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../5_entities/store';
import { UserAction } from '../4_features/ui/UserAction';
import Button from '../6_shared/ui/Buttons/Button';
import { useContext } from 'react';
import Modal from './modals/Modal';
import { buttonColors } from '../6_shared/ui/Buttons/Button';
import { AppContext } from '../1_app/App';
import { LoginSignUpForm } from './LoginSignUpForm';

export default function Header() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext null');
  }

  const { isModalActive, setIsModalActive, setIsLoginForm } = context;
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin);
  // const isUserLogin = true;
  console.log('isUserLogin', isUserLogin)

  const openModal = (type: boolean) => {
    setIsLoginForm(type);
    setIsModalActive(true);
    console.log('открыть модалку');
  };

  const onCloseModal = () => {
    setIsLoginForm(null);
    setIsModalActive(false);
    console.log('закрыть модалку');
  };

  return (
    <HeaderContainer>
      <Logo />
      {isUserLogin && (
        <>
          <nav>
            <Menu>
              <MenuItem text="Мой вишлист" path="/MyWishes" />
              <MenuItem text="Друзья" path="/Friends" />
              <MenuItem text="Дарю друзьям" path="/GivingToFriends" />
            </Menu>
          </nav>
          <UserAction />
        </>
      )}
      {!isUserLogin && (
        <LoginSignUpMenu>
          <LoginButton
            isLink={false}
            text="Войти"
            onClick={() => openModal(true)}
            btnColor={buttonColors.white}
          />
          <SignUpButton
            isLink={false}
            text="Зарегистрироваться"
            onClick={() => openModal(false)}
            btnColor={buttonColors.white}
          />
        </LoginSignUpMenu>
      )}

        <Modal
          isActive={isModalActive}
          closeModal={onCloseModal}
          children={LoginSignUpForm()}
        />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-inline: var(--padding-inline);

  background-color: var(--color-light);
  color: var(--color-purple);
  font-weight: 700;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const LoginSignUpMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 700;
`;

const LoginButton = styled(Button)`
  &:hover {
    background-color: inherit;
    color: var(--color-purple-light);
  }
`;

const SignUpButton = styled(LoginButton)`
  border: var(--border);
  border-color: var(--color-purle);
`;
