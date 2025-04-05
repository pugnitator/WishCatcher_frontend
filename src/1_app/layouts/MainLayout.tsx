import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../5_entities/store';
import Header from '../../3_widgets/Header';
import Footer from '../../3_widgets/Footer';
import Home from '../../2_pages/Home';
import MyWishes from '../../2_pages/MyWishes';
import MyFriends from '../../2_pages/MyFriends';
import GivingToFriends from '../../2_pages/GivingToFriends';
import CreateWish from '../../2_pages/CreateWish';
import Friend from '../../2_pages/Friend';
import MyAccount from '../../2_pages/MyAccount';
import LoaderPage from '../../2_pages/LoaderPage';

export default function MainLayout() {
  console.log('Я в мэйн лэйауте');
  
  const isUserLogin = useSelector((state: RootState) => state.user.isLogin);
  console.log(isUserLogin);
  return (
    <Layout isLogin={isUserLogin}>
      <Header /> 
      <Routes>
        <Route path="/" element={isUserLogin ? <Navigate to='/my-wishes' /> : <Home />} />
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="/my-wishes" element={isUserLogin ? <MyWishes /> : <Navigate to='/' />} />
        <Route path="/my-profile" element={isUserLogin ? <MyAccount /> : <Navigate to='/' />} />
        <Route path="/create-wish" element={isUserLogin ? <CreateWish /> : <Navigate to='/' />} />
        <Route path="/friends" element={isUserLogin ? <MyFriends /> : <Navigate to='/' />} />
        <Route path="/friend/:id" element={isUserLogin ? <Friend /> : <Navigate to='/' />} />
        <Route path="/my-wishes" element={isUserLogin ? <MyWishes /> : <Navigate to='/' />} />
        <Route path="/giving-to-friends" element={isUserLogin ? <GivingToFriends /> : <Navigate to='/' />} />
        <Route path="*" element={<Navigate to='/' />} />
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
  height: 100%;
  min-height: 100vh;
  background: ${prop => prop.isLogin ? `var(--bg-color-user)` : `var(--bg-color-guest)`};
  border: none;
`;
