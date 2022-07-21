import Typography from "../../atoms/typography";
import React from "react";
import { Grid } from "@mui/material";

interface PortfolioProps {
    totalBalance: number;
    data: any;
}

const Portfolio = ({totalBalance, data}: PortfolioProps) => {
    return (
        <Grid>
            <Grid item>
                <Grid>
                    <Typography>My Portfolio</Typography>
                </Grid>
                <Grid>
                    {/* Icon 1 */}
                    {/* Icon 2 */}
                </Grid>
            </Grid>
            <Grid item>
                {/* Map primary card with details of coin */}
                {data}
            </Grid>
            <Grid item>
                <Typography>Total balance: {totalBalance}</Typography>
            </Grid>
        </Grid>
    )
};

export default Portfolio;