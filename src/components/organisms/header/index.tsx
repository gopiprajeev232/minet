import { Avatar, Grid } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/typography";
import IconLabel from "../../molecules/iconLabel";

const Header = () => {
    return (
        <Grid>
            <Grid item>
                <Typography>Dashboard</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained">Sell</Button>
                <Button variant="contained">Buy</Button>
                <Avatar>Avatar</Avatar>
                <Icon imgSrc={"dropdown"}></Icon>
            </Grid>
        </Grid>
    )
}

export default Header;