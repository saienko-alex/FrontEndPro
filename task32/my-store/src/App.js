import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminApp from './modules/admin/AdminApp';
import Dashboard from './modules/admin/dashboard/pages/Dashboard';
import Authorization from './modules/common/authorization/pages/Authorization';
import Login from './modules/common/authorization/pages/Login';
import Logout from './modules/common/authorization/pages/Logout';
import Signup from './modules/common/authorization/pages/Signup';
import AuthorizationProvider from './modules/common/authorization/providers/AuthorizationProvider';
import Landing from './modules/user/landing/pages/Landing';
import Products from './modules/user/products/pages/Products';
import { Container } from '@mui/material'
import MainNavigation from './modules/common/components/MainNavigation';


function App() {
  return (
    <Container maxWidth="xl">
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/store" element={<Products />} />
        <Route path="/auth" element={<Authorization />}>
          <Route path="" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup" element={<Signup />} />
        </Route>  
        <Route path="admin" element={<AdminApp />}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>  
      </Routes>
    </Container>
  )
}

export default App