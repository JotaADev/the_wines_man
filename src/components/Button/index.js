import React from 'react';
import { StyledButton } from './style';

const Button = ({children, width, height, margin, padding, border, bradius, backcolor,
    color, borderhover, backcolorhover, colorhover}) => {
    return (
        <>
            <StyledButton
                width={width}
                height={height}
                margin={margin}
                padding={padding}
                border={border}
                bradius={bradius}
                backcolor={backcolor}
                color={color}
                borderhover={borderhover}
                backcolorhover={backcolorhover}
                colorhover={colorhover}
            >{children}</StyledButton>
        </>
    );
}

export default Button;