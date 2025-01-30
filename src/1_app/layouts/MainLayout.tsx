import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "../../3_widgets/Header";
import Footer from "../../3_widgets/Footer";
import Home from "../../2_pages/Home";
import theme from "../ui/Theme";

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MyWishes" element={<Home/>} />
        <Route path="/Friends" element={<Home/>} />
        <Route path="/GivingToFriends" element={<Home/>} />
      </Routes>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1220px;
  max-width: 1920px;
  height: 100vh;
  background: ${theme.guestBackground};
  border: none;
`;
