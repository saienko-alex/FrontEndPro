import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';

function MainNavigation() {
    return (
        <AppBar position="static" color='error'>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    My Contacts Book
                </Typography>
                <Button color="inherit" to="users" component={NavLink}>
                    CONTACTS
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default MainNavigation;