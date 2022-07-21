import React from "react";

import {Grid, Tab} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface TabData {
    title: string;
    content: string;
}

interface TabsProps {
    data?: TabData[];
}

const Tabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
        <Grid>
            <TabContext value={value}>
                {/* Map title of tabs to the tab component */}
            </TabContext>            
            {/* Map tab panels */}
        </Grid>
    );
};

export default Tabs;