import React from "react";
import {Typography as MUITypography, TypographyProps} from '@mui/material';

interface TypographyProperties extends TypographyProps {
    children: React.ReactNode;
}

const Typography = ({children, ...props}: TypographyProperties) => {
    return (
        <MUITypography {...props}>{children}</MUITypography>
    );
};

export default Typography;