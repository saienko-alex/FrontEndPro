import React from 'react'
import { NavLink } from 'react-router-dom';
import UseUser from '../../../common/authorization/hooks/UseUser';
import { Button, Paper } from '@mui/material';

function Landing() {
    const user = UseUser();
  return (
    <div>
        <Paper>
            {JSON.stringify(user)}
            Landing
            <Button variant='text' to='/auth' component={NavLink}>
                Login
            </Button>
            <Button variant='text' to='/admin' component={NavLink}>
                Admin Panel
            </Button>
        </Paper>
    </div>
  )
}

export default Landing