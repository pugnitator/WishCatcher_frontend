import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../5_entities/store';
import Header from '../../3_widgets/Header';
import Footer from '../../3_widgets/Footer';
import Home from '../../2_pages/Home';
import MyWishes from '../../2_pages/MyWishes';

export default function MainLayout() {
  // const isUserLogin = useSelector((state: RootState) => state.user.isLogin);
  const isUserLogin = true;
  console.log(isUserLogin);
  return (
    <Layout isLogin={isUserLogin}>
      <Header isUserLogin={isUserLogin}/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyWishes" element={isUserLogin ? <MyWishes /> : <Home />} />
        <Route path="/Friends" element={isUserLogin ? <MyWishes /> : <Home />} />
        <Route path="/GivingToFriends" element={isUserLogin ? <MyWishes /> : <Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer isUserLogin={isUserLogin}/>
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
