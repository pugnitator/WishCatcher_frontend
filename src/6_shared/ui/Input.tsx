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
    color: ${theme.colorDark};
    font-size: 16px;
    font-width: 400;
`;

const StyledInput = styled.input`
    background-color: ${theme.colorLight};
    border-radius: 10px;
    height: 40px;
`;