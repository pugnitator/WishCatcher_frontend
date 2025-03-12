import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../5_entities/store';
import Header from '../../3_widgets/Header';
import Footer from '../../3_widgets/Footer';
import Home from '../../2_pages/Home';

export default function MainLayout() {
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin)
  console.log(isUserLogin);
  return (
    <Layout isLogin={isUserLogin}>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyWishes" element={<Home />} />
        <Route path="/Friends" element={<Home />} />
        <Route path="/GivingToFriends" element={<Home />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

interface LayoutProp {
  isLogin: boolean;
}

const Layout = styled.div<LayoutProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${prop => prop.isLogin ? `var(--bg-color-user)` : `var(--bg-color-guest)`};
  border: none;
`;
