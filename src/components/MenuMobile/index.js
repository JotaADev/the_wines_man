import React from 'react';
import { MenuStyled, ReservedArea, NavMenu, NavOption, ButtonGroup } from './style';
import Button from '../Button';

const MenuMobile = () => {
    return (
        <>
            <MenuStyled>
                <ReservedArea></ReservedArea>
                <NavMenu>
                    <NavOption href='/'>Home</NavOption>
                    <NavOption href='/'>Carta de Vinhos</NavOption>
                    <NavOption href='/'>Quem Somos</NavOption>
                    <NavOption href='/'>Blog</NavOption>
                </NavMenu>
                <ButtonGroup>
                    <Button margin='0.5rem 0' width='70%' padding='0.4rem' border='1px solid #000000' bradius='0.5rem' backcolor='transparent'>Cadastre-se</Button>
                    <Button margin='0.5rem 0' width='50%' padding='0.4rem' border='none' bradius='0.5rem' backcolor='#1C1C1C' color='#FFB038'>Login</Button>
                </ButtonGroup>
            </MenuStyled>
        </>
    );
}

export default MenuMobile;