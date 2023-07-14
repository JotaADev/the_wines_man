import { styled } from "styled-components";

export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 80%;
    position: relative;
    border-radius: 1.5rem;
    margin: 1.5rem 0;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: ${props => props.backimg};
        background-size: cover;
        background-position: bottom;
        z-index: -1;
        opacity: 0.4;
        border-radius: 1.5rem;
    }
`

export const TitleStyled = styled.h1`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 2rem;
`

export const TextStyled = styled.p`
    color: #FFFFFF;
    text-align: center;
`