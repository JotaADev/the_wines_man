import React from 'react';
import { ButtonArea, CardArea, ContentArea, ImageArea, TextStyled, TitleStyled } from './style';
import Button from '../Button';

const Card = ({direction, cardimg, title, text, btncolor, btnbackcolor, btntext}) => {
    return (
        <>
            <CardArea fdirection={direction}>
                <ImageArea src={cardimg}/>
                <ContentArea>
                    <TitleStyled>{title}</TitleStyled>
                    <TextStyled>{text}</TextStyled>
                    <ButtonArea>
                        <Button border='none' width='50%' padding='0.5rem' bradius='0.5rem' color={btncolor} backcolor={btnbackcolor}>{btntext}</Button>
                    </ButtonArea>
                </ContentArea>
            </CardArea>
        </>
    );
}

export default Card;