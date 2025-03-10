import styled from 'styled-components';
import Logo from '../6_shared/ui/Logo';
import MenuItem from '../6_shared/ui/menu/MenuItem';
import theme from '../1_app/ui/Theme';
import { useSelector } from 'react-redux';
import { RootState } from '../5_entities/store';
import { UserAction } from '../4_features/ui/UserAction';
import Button from '../6_shared/ui/Button';
import { useState } from 'react';
import Modal from './modals/Modal';
import LoginSignUpForm from './LoginSignUpForm';

export default function Header() {
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin);

  const [formType, setFormType] = useState('');

  const onCloseModal = () => {
    console.log(formType);
    setFormType('');
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
          <LoginButton text="Login" onClick={() => setFormType('login')} />
          <SignUpButton text="Sign up" onClick={() => setFormType('signUp')} />
        </LoginSignUpMenu>
      )}

      <Modal
        isActive={Boolean(formType)}
        closeModal={onCloseModal}
        children={LoginSignUpForm({
          formType: formType,
        })}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  padding: 0 12%;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colorLight};
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const LoginSignUpMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colorPurpleLigth};
  font-weight: 700;
`;

const LoginButton = styled(Button)`
  background-color: ${theme.colorLight};
  font-weight: inherit;
`;

const SignUpButton = styled(Button)`
  background-color: ${theme.colorLight};
  border-color: ${theme.colorPurple};
  font-weight: inherit;
`;
