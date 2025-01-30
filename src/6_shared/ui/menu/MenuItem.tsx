import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../1_app/ui/Theme";

interface menuItemProp {
    text: string;
    path: string;
};

export default function MenuItem(prop: menuItemProp) {
    const {text, path} = prop;
    return (
        <Item>
            <StyledLink to={path}>{text}</StyledLink>
        </Item>
    )
};

const Item = styled.li`
    padding: 10px 10px;
    font-weight: 700;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${theme.text.menuItemColor};
    font-size: 18px;

    &.active {
        color: ${theme.text.activeMenuItemColor};
    }

    &:hover {
        color: ${theme.text.activeMenuItemColor};
        cursor: pointer;
    }
`