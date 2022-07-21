import { Grid } from "@mui/material";
import React from "react";

interface PrimaryCardProps {
    coinName: string;
    coinShortForm: string;
    price: string;
    percentChange: string;
}

const PrimaryCard = ({coinName, coinShortForm, price, percentChange}: PrimaryCardProps) => {
    return (
        <Grid>
            <Grid item>
                {coinName}
                {coinShortForm}
            </Grid>
            <Grid item>
                {price}
                {percentChange}
            </Grid>
        </Grid>
    )
}

export default PrimaryCard;