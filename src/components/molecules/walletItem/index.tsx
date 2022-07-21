import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/typography";

interface WalletItemProps {
    date?: string;
    iconSrc?: string;
    coinName?: string;
    purchasedFrom?: string;
    status?: string;
    amount?: number;
    amountInUSD?: number;
}

const WalletItem = ({date, iconSrc, coinName, purchasedFrom, status, amount, amountInUSD}: WalletItemProps) => {
    return (
        <Grid>
            <Grid item>
                <Typography>{date}</Typography> 
                <Icon imgSrc={iconSrc!}></Icon>
                <Typography>{coinName}</Typography>
                <Typography>From {purchasedFrom}</Typography>
                <Typography>{status}</Typography>
            </Grid>
            <Grid item>
                <Typography>{amount}</Typography>
                <Typography>{amountInUSD}</Typography>
            </Grid>
        </Grid>
    )
}

export default WalletItem;