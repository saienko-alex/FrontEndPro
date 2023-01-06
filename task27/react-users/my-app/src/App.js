import './App.css';

import { Button, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Home from './modules/home/pages/Home';
import MainNavigation from './modules/common/components/MainNavigation';
import UserForm from './modules/users/pages/UseForm';
import Users from './modules/users/pages/Users';
import UsersList from './modules/users/pages/UsersList';
import useUsersList from '../src/modules/users/hooks/useUsersList';
import Loading from './modules/common/components/Loading/Loading';

function App() {
    const { isloading } = useUsersList();
    return (
        <Container maxWidth="sm">
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />}>
                    <Route path="" element={isloading? <Loading /> : <UsersList />} />
                    <Route path=":id" element={<UserForm />} />
                </Route>
            </Routes>
        </Container>
    );
}

export default App;