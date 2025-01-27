import styled from "styled-components";

interface ButtonProp {
    text: string;
    onclick: () => void;
    className?: 'string'
}

export default function Button(prop: ButtonProp) {
    const {text, onclick, className} = prop;

    return(
        <ButtonWrap onClick={onclick} className={className}>{text}</ButtonWrap>
    )
};

const ButtonWrap = styled.button`
    box-sizing: border-box;
    height: 60px;
    padding: 15px 20px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Nunito Variable', monospace; 
    font-size: 18px;
`