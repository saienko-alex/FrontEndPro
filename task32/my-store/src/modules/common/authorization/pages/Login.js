import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/UseAuth';
import { Button, Paper, TextField, Typography, AppBar, Toolbar } from '@mui/material';

function Login() {
    const auth = useAuth();
    function onsubmit(values) {
        auth.login(values.username, values.password, values.role)
    }
  return (
    // <Formik initialValues={{username:'', password:'', role:'admin'}}  onSubmit={onsubmit}>
    //   <Form>
    //       {auth.isAuthorized && <Navigate to="/" />}
    //       {JSON.stringify(auth.user)}
    //       <Field name="username" placeholder="Username"/>
    //       <br />
    //       <Field name="password" placeholder="Password"/>
    //       <br />
    //       <Field name="role" placeholder="Role" />
    //       <br />
    //       <Button variant='contained' type='submit'>Login</Button>
    //   </Form>
    // </Formik>
    <Paper>
      <AppBar position="static" color='secondary'>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    Login
                </Typography>
            </Toolbar>
        </AppBar>
        <Formik initialValues={{username:'', password:'', role:'admin'}} enableReinitialize={true} onSubmit={onsubmit}>
        {({values, handleChange, handleBlur}) => (
          <Form>
            {auth.isAuthorized && <Navigate to="/" />}
            {/* {JSON.stringify(auth.user)} */}
            <TextField name="username" placeholder="Username" variant='outlined' fullWidth value={values.username} onChange={handleChange} onBlur={handleBlur}/>
            <br />
            <TextField name="password" placeholder="Password" variant='outlined' fullWidth value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            <br />
            <TextField name="role" placeholder="Role" variant='outlined' fullWidth value={values.role} onChange={handleChange} onBlur={handleBlur}/>
            <br />
            <Button variant='contained' type='submit'>Login</Button>
          </Form>
        )}
      </Formik>
    </Paper>
    

  )
}

export default Login




{/* <Formik initialValues={{username:'', password:'', role:'admin'}} enableReinitialize={true} onSubmit={onsubmit}>
<Form>
    {auth.isAuthorized && <Navigate to="/" />}
    {JSON.stringify(auth.user)}
    <Field name="username" placeholder="Username"/>
    <br />
    <Field name="password" placeholder="Password"/>
    <br />
    <Field name="role" placeholder="Role" />
    <br />
    <Button variant='contained' type='submit'>Login</Button>
</Form>
</Formik> */}