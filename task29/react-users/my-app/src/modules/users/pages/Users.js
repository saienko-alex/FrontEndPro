import { Outlet } from 'react-router-dom';
import React from 'react';
import UsersNavigation from '../components/UserNavigation';

function Users() {
    return (
        <div>
            <UsersNavigation />
            <Outlet />
        </div>
    );
}

export default Users;