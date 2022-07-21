import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";

const CryptoInfo = () => {
    return (
        <Grid>
            <Grid item>
                <Icon imgSrc="icon"></Icon>
            </Grid>
            <Grid item>
                <Typography>Market cap</Typography>
                <Typography>Vol. 24H</Typography>
                <Typography>Circulating Supply</Typography>
            </Grid>
            <Grid item>
                <Button startIcon={"star"}>Add to watchlist</Button>
            </Grid>
        </Grid>
    )
}

export default CryptoInfo;