import { Grid } from "@mui/material";
import React from "react";
import Typography from "../../atoms/typography";
import IconLabel from "../../molecules/iconLabel";
import Tabs from "../../molecules/tabs";

const PortfolioValue = () => {
    return (
        <Grid>
            <Grid item>
                <Typography>Total investment</Typography>
                <IconLabel imgSrc={src} label={value}></IconLabel>
            </Grid>
            <Grid item>
                <Tabs />
            </Grid>
            <Grid item>
                <Typography>$ {amount}</Typography>
            </Grid>
            <Grid item>
                {/* Display the graph based on chip selected */}
            </Grid>
            <Grid item>
                {/* Display chips and show graph based on chip */}
            </Grid>
        </Grid>
    )
}

export default PortfolioValue;