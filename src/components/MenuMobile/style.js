import { styled } from "styled-components";

export const MenuStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #FFB038;
`

export const ReservedArea = styled.div`
    height: 15vh;
    min-height: 100px;
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
`

export const NavOption = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin-bottom: 0.5rem;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 5rem;
`