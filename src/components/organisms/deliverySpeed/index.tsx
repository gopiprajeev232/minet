import { Grid } from "@mui/material";
import React from "react";
import Dropdown from "../../atoms/dropdown";

interface DeliverySpeedProps {
    data: React.ReactNode[];
}

const DeliverySpeed = ({data}: DeliverySpeedProps) => {
    return (
        <Grid>
          <Dropdown data={data} /> 
        </Grid>
    )
}

export default DeliverySpeed;