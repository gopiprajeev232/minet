import { Grid, Typography } from "@mui/material";
import React from "react";
import Dropdown from "../../atoms/dropdown";
import InputFieldWithIcon from "../../molecules/inputFieldWithIcon";

const DetailedWallet = () => {
    return (
        <Grid>
            <Grid item>
                <Typography>Total balance {amount}</Typography>
            </Grid>
            <Grid item>
                <InputFieldWithIcon placeholder="Search all assets" />
                <Dropdown data={data} />
            </Grid>
            <Grid item>
                {/* Map wallet items based on data from api call */}
            </Grid>
        </Grid>
    )
}

export default DetailedWallet;