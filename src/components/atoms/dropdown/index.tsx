import { Select } from "@mui/material";
import React from "react";

interface DropdownData {
    key: string;
    value: string;
}

interface DropdownProps {
    data: DropdownData[];
}

const Dropdown = ({data}: DropdownProps) => {
    return (
        <Select>
            {data}
        </Select>
    )
}

export default Dropdown;