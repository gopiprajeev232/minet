import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/typography";

interface WatchlistCardProps {
    iconSrc?: string;
    coinName?: string;
    coinPrice?: number;
    timePeriod?: string;
}

const WatchlistCard = ({iconSrc, coinName, coinPrice, timePeriod}: WatchlistCardProps) => {
    return (
        <Grid>
            <Grid item>
                <Icon imgSrc={iconSrc!} />
                <Grid>
                    <Typography>{coinName}</Typography>
                    <Typography>{coinPrice}</Typography>
                    <Typography>{timePeriod}</Typography>
                </Grid>
                <Grid item>
                    {/* Graph */}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WatchlistCard;