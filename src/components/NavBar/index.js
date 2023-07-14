import React from 'react';
import { ButtonGroup, LogoLink, NavMenu, NavOption, NavStyled } from './style';
import Button from '../Button';

const NavBar = () => {
    return (
        <>
            <NavStyled>
                <LogoLink href='/'>
                    <img src='logo.png' height='80%'/>
                </LogoLink>
                <NavMenu>
                    <NavOption href='/'>Home</NavOption>
                    <NavOption href='/'>Cartela de Vinhos</NavOption>
                    <NavOption href='/'>Quem Somos</NavOption>
                    <NavOption href='/'>Blog</NavOption>
                </NavMenu>
                <ButtonGroup>
                    <Button padding='0.4rem' border='1px solid #000000' bradius='0.5rem' backcolor='transparent' margin='0 0.5rem'>Cadastre-se</Button>
                    <Button width='5rem'padding='0.4rem' border='none' bradius='0.5rem' backcolor='#1C1C1C' color='#FFB038' margin='0 0.5rem'>Login</Button>
                </ButtonGroup>
            </NavStyled>
        </>
    );
}

export default NavBar;