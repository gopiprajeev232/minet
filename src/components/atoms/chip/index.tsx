import React from "react";
import {Chip as MUIChip} from '@mui/material';

interface ChipProps {
    label: string;
}

const Chip = ({label}: ChipProps) => {
    return (
        <MUIChip label={label} />
    )
}

export default Chip;