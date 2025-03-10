import styled from "styled-components";

export interface buttonProp {
    text: string;
    onClick: () => void;
    className?: 'string'
}

export default function Button(prop: buttonProp) {
    const {text, onClick, className} = prop;

    return(
        <ButtonWrap onClick={onClick} className={className}>{text}</ButtonWrap>
    )
};

const ButtonWrap = styled.button`
    box-sizing: border-box;
    height: 60px;
    padding: 15px 20px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    cursor: pointer;
    color: inherit;
    font-size: 18px;
`