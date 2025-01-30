import styled from "styled-components";
import theme from "../../1_app/ui/Theme";


export interface inputProp{
    title: string;
    inputType?: string;
}

export default function Input(prop: inputProp) {
    const {title, inputType} = prop;

    return(
        <div>
            <StyledLabel>{title}</StyledLabel>
            <StyledInput type={inputType? inputType : 'text'}/>
        </div>
    )

};

const StyledLabel = styled.label`
    color: ${theme.text.mainBlackColor};
    font-size: 16px;
    font-width: 400;
`;

const StyledInput = styled.input`
    background-color: ${theme.listItemBackground};
    border-radius: 10px;
    hight: 40px;
`;