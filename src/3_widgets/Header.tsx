import styled from "styled-components";
import Logo from "../6_shared/ui/Logo";
import MenuItem from "../6_shared/ui/menu/MenuItem";
import LoginSignUp from "../4_features/ui/Login_SingUp";
import { useState } from "react";
import theme from "../1_app/ui/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../5_entities/store";
import { UserAction } from "../4_features/ui/UserAction";

export default function Header() {
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo />
      {isUserLogin && (
        <nav>
          <Menu>
            <MenuItem text="Мой вишлист" path="/MyWishes" />
            <MenuItem text="Друзья" path="/Friends" />
            <MenuItem text="Дарю друзьям" path="/GivingToFriends" />
          </Menu>
        </nav>
      )}
      {!isUserLogin && (
        <LoginSignUp
          setIsLogin={() => setIsLoginModalOpen}
          setIsSignUp={() => setIsSignUpModalOpen}
        />
      )}
      {isUserLogin && <UserAction/>}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  padding: 0 12%;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.headerBackground};
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
