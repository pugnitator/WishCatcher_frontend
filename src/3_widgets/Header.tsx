import styled from "styled-components";

export default function Header() {
    return(
        <HeaderContainer>
            <div>Logo</div>
            <div>Menu</div>
            <div>User</div>
            {/* <Logo/>
            <Menu/>
            <UserInfo/> */}
        </HeaderContainer> 
    )
}

const HeaderContainer = styled.header`
    display: flex;
    hight: 100px;
    margin: 0 12.5%;
    justify-content: space-between;
    align-content: center;
    color: white;
    background-color: black;
`