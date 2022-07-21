import React from "react";
import {Button as MUIButton} from '@mui/material';

interface ButtonProps {
    variant: "text" | "outlined" | "contained";
    children: string;
    onClick?: () => void;
}

const Button = ({variant, children, onClick}: ButtonProps) => {
    return (
        <MUIButton variant={variant} onClick={onClick}>
            {children}
        </MUIButton>
    )
};

export default Button;