import { styled } from "styled-components";

export const CardArea = styled.div`
    width: 60%;
    height: 250px;
    display: flex;
    flex-direction: ${props => props.fdirection};
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0;
`

export const ImageArea = styled.img`
    border-radius: 1rem 4rem 1rem 4rem;
    width: 49%;
    height: 100%;
`

export const ContentArea = styled.div`
    width: 49%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const TitleStyled = styled.h1`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 2.5rem;
`

export const TextStyled = styled.p`
    color: #FFFFFF;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`