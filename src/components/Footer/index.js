import React from 'react';
import { ContactArea, CopyrightGroup, FooterArea, FooterGroup, ImportantLink, ImportantLinksArea, SocialArea, SocialIcons, TitleStyled } from './style';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterArea>
            <FooterGroup>
                <SocialArea>
                    <TitleStyled>Redes sociais</TitleStyled>
                    <SocialIcons>
                        <a href='/'><AiOutlineInstagram size='24px' color='#FFFFFF'/></a>
                        <a href='/'><AiOutlineWhatsApp size='24px' color='#FFFFFF'/></a>
                        <a href='/'><AiOutlineTwitter size='24px' color='#FFFFFF'/></a>
                    </SocialIcons>
                </SocialArea>
                <ImportantLinksArea>
                    <TitleStyled>Links importantes</TitleStyled>
                    <ImportantLink href='/'>Carta de vinhos</ImportantLink>
                    <ImportantLink href='/'>Quem somos</ImportantLink>
                    <ImportantLink href='/'>Blog</ImportantLink>
                </ImportantLinksArea>
                <ContactArea>
                    <TitleStyled>Contato</TitleStyled>
                    <ImportantLink href='/'>thewinesman@email.com</ImportantLink>
                </ContactArea>
            </FooterGroup>
            <CopyrightGroup>
                <p>Copyright (c) 2023 The Wine's Man - Todos os direitos reservados</p>
            </CopyrightGroup>
        </FooterArea>
    );
}

export default Footer;