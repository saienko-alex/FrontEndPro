import React from 'react'
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/authorization/components/ProtectedRoute';

function AdminApp() {
  return (
    <div>
        <ProtectedRoute roles={['admin', 'sales']}>
            <Outlet />
        </ProtectedRoute>
    </div>
  )
}

export default AdminApp