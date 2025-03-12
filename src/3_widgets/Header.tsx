import styled from 'styled-components';
import Logo from '../6_shared/ui/Logo';
import MenuItem from '../6_shared/ui/menu/MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../5_entities/store';
import { UserAction } from '../4_features/ui/UserAction';
import Button from '../6_shared/ui/Buttons/Button';
import { useState } from 'react';
import Modal from './modals/Modal';
import LoginForm from './LoginForm';
import { buttonColors } from '../6_shared/ui/Buttons/Button';

export default function Header() {
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin);

  //true - вход, false - регистрация
  const [formType, setFormType] = useState<boolean | null>(null);

  const onCloseModal = () => {
    console.log(formType);
    setFormType(null);
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
            onClick={() => setFormType(true)}
            btnColor={buttonColors.white}
          />
          <SignUpButton
            isLink={false}
            text="Зарегистрироваться"
            onClick={() => setFormType(false)}
            btnColor={buttonColors.white}
          />
        </LoginSignUpMenu>
      )}

      <Modal
        isActive={formType !== null}
        closeModal={onCloseModal}
        //TODO: как-то поправить или true
        children={LoginForm(formType ?? true)}
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
  font-size: 18px;
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
