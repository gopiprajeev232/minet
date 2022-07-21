import { Grid } from "@mui/material";
import React from "react";
import IconLabel from "../../molecules/iconLabel";

const CoinInfo = () => {
    return (
        <Grid>
            <Grid item>
                <Typography>Current value</Typography>
                <Typography>{value}</Typography>
                <IconLabel imgSrc={arrow} label={percentChange}></IconLabel>
            </Grid>
            <Grid item>
                <Tabs />
            </Grid>
            <Grid item>
                {/* Graph */}
            </Grid>
        </Grid>
    )
}