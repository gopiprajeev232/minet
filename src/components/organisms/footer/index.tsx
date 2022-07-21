import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Dropdown from "../../atoms/dropdown";

const Footer = () => {
    return (
        <Grid>
            <Grid item>
                <Typography>Dashboard</Typography>
                <Typography>Careers</Typography>
                <Typography>Legal & Privacy</Typography>
                <Typography>Trademark</Typography>
            </Grid>
            <Grid item>
                <Dropdown data={data} />
                <Button variant="outlined">NEED HELP</Button>
            </Grid>
        </Grid>
    )
};

export default Footer;