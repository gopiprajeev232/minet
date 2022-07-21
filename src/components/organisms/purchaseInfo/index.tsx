import { Grid, Stepper } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

interface PurchaseInfoProps {
    cryptoPurchaseAmount?: number;
    coinInfo?: string;
}

const PurchaseInfo = ({cryptoPurchaseAmount, coinInfo}: PurchaseInfoProps) => {
    return (
        <Grid>
            <Grid item>
                <Typography>You are buying</Typography>
                <Typography>{cryptoPurchaseAmount}</Typography>
                <Typography>{coinInfo}</Typography>
            </Grid>
            <Grid item>
                {/* Payment method, delivery fees and deposit to location */}
                <Stepper />
            </Grid>
            <Grid item>
                {/* Transaction info */}
            </Grid>
            <Button variant="contained">Buy now</Button>
        </Grid>
    )
}

export default PurchaseInfo;