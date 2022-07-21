import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import IconLabel from "../../molecules/iconLabel";

const Watchlist = () => {
    return (
        <Grid>
            <Grid item>
                <Grid>
                    <IconLabel imgSrc={""} label={"Discover assets"} />
                </Grid>
                <Grid>
                    <IconLabel imgSrc={""} label={"Edit"}></IconLabel>
                    <Icon imgSrc="window"></Icon>
                    <Icon imgSrc="circle"></Icon>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Watchlist;