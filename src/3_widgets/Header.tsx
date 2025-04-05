import styled from 'styled-components';
import Logo from '../6_shared/ui/Logo';
import MenuItem from '../6_shared/ui/menu/MenuItem';
import { UserActions } from '../4_features/ui/UserAction'
import Button from '../6_shared/ui/buttons/Button';
import { useContext } from 'react';
import Modal from './modals/Modal';
import { buttonColors } from '../6_shared/ui/buttons/Button';
import { AppContext } from '../1_app/App';
import { LoginSignUpForm } from './form/LoginSignUpForm';
import ContentContainer from '../6_shared/ui/ContentContainer';
import store from '../5_entities/store';

export default function Header() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext null');
  }

  const { isModalOpen, setIsModalOpen, setIsLoginForm } = context;
  const isUserLogin = Boolean(store.getState().user.currentUser);

  const openModal = (type: boolean) => {
    setIsLoginForm(type);
    setIsModalOpen(true);
    console.log('открыть модалку');
  };

  const onCloseModal = () => {
    setIsLoginForm(null);
    setIsModalOpen(false);
    console.log('закрыть модалку');
  };

  return (
    <HeaderWrapper>
      <ContentContainer>
        <HeaderContainer>
          <Logo />
          {isUserLogin && (
            <>
              <nav>
                <Menu>
                  <MenuItem text="Мой вишлист" path="/my-wishes" />
                  <MenuItem text="Друзья" path="/friends" />
                  <MenuItem text="Дарю друзьям" path="/giving-to-friends" />
                </Menu>
              </nav>
              <UserActions />
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
          <Modal isActive={isModalOpen} closeModal={onCloseModal}>
            <LoginSignUpForm />
          </Modal>
        </HeaderContainer>
      </ContentContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;

  padding: 10px 0;

  background-color: var(--color-light);
  color: var(--color-purple);
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
