import { styled } from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-radius: ${props => props.bradius};
    background-color: ${props => props.backcolor};
    color: ${props => props.color};
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        border: ${props => props.borderhover};
        background-color: ${props => props.backcolorhover};
        color: ${props => props.colorhover};
    }
`