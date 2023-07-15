import { styled } from "styled-components";

export const FooterArea = styled.footer`
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

export const FooterGroup = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 1067px) {
        flex-direction: column;
    }
`

export const SocialArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1067px) {
        margin-bottom: 1rem;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;

    @media (max-width: 1067px) {
        width: 40%;
    }
`

export const ImportantLinksArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1067px) {
        margin-bottom: 1rem;
    }
`

export const ImportantLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;
`

export const ContactArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleStyled = styled.h1`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
`

export const CopyrightGroup = styled.div`
    background-color: #FFB038;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin-top: 1.5rem;

    @media (max-width: 1067px) {
        height: 2.5rem;
        margin-top: 1rem;
        text-align: center;
    }
`