import React from 'react';
import { IconArea, LogoLink, NavStyled } from './style';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import MenuMobile from '../MenuMobile';

const NavBarMobile = () => {

    const [view, setView] = React.useState(false);

    return (
        <NavStyled>
            <LogoLink href='/'>
                <img src='logo.png' height='70%'/>
            </LogoLink>
            <IconArea onClick={() => {setView(!view)}}>
                {view ? <AiOutlineClose size='32px'/> : <HiOutlineBars3BottomRight size='32px'/>}
            </IconArea>
            {view ? <MenuMobile/> : null}
        </NavStyled>
    );
}

export default NavBarMobile;