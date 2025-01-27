import styled from "styled-components";
import Logo from "../6_shared/ui/Logo";
import MenuItem from "../6_shared/ui/menu/MenuItem";
import LoginSignUp from "../4_features/ui/Login_SingUp";
import { useState } from "react";
import theme from "../1_app/ui/Theme";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <Menu>
          <MenuItem text="Мой вишлист" path="/MyWishes" />
          <MenuItem text="Друзья" path="/Friends" />
          <MenuItem text="Дарю друзьям" path="/GivingToFriends" />
        </Menu>
      </nav>
      <LoginSignUp
        setIsLogin={() => setIsLogin}
        setIsSignUp={() => setIsSignUp}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  padding: 0 12%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  color: white;
  background-color: ${theme.headerBackground};
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
