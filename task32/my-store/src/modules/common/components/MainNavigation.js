import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';

function MainNavigation() {
    return (
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    My Store
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MainNavigation;