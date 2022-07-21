import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/typography";

interface IconLabelProps {
    imgSrc: string;
    label: string;
}

const IconLabel = ({imgSrc, label}: IconLabelProps) => {
    return (
        <Grid>
            <Icon imgSrc={imgSrc}></Icon>
            <Typography>{label}</Typography>
        </Grid>
    )
};

export default IconLabel;