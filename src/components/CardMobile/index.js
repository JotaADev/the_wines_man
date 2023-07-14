import React from 'react';
import { CardArea, TextStyled, TitleStyled } from './style';
import Button from '../Button';

const CardMobile = ({cardimg, title, text, btncolor, btnbackcolor, btntext}) => {
    return (
        <>
            <CardArea backimg={'url(' + cardimg + ')'}>
                <TitleStyled>{title}</TitleStyled>
                <TextStyled>{text}</TextStyled>
                <Button border='none' width='70%' padding='0.7rem' bradius='0.5rem' color={btncolor} backcolor={btnbackcolor}>{btntext}</Button>
            </CardArea>
        </>
    );
}

export default CardMobile;