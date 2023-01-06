import { Button, Paper, TextField } from '@mui/material';
// import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import MyTextField from '../../common/components/form/MyTextField';
import { useState, useEffect } from 'react';
// import useForm from '../../common/hooks/useForm';
import useUser from '../hooks/useUser';

const REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUser } = useUser(id);



    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [values, setValues] = useState(user);

    useEffect(() => {
        setValues(user);
        validate(user);
        setTouched({});
    }, [user]);

    function onInputChange(e) {
        const newValues = { ...values, [e.target.name]: e.target.value };

        setValues(newValues);

        validate(newValues);
    }

    function onInputBlur(e) {
        setTouched({ ...touched, [e.target.name]: true });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(values).then(() => navigate('..'));
    }

    function validate(values) {
        const errors = {};
    
        if (!values.name) {
            errors.name = 'Name is Empty';
        }
        if (!values.surname) {
            errors.surname = 'Surname is  Empty';
        }
        if (!values.email.toLowerCase().match(REGEXP)) {
            errors.email = 'Email is Wrong';
        }
        if (!values.email) {
            errors.email = 'Email is Required';
        }
        setIsValid(!Object.keys(errors).length);
        setErrors(errors);
    }

    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField
                error={touched.name && !!errors.name}
                helperText={touched.name ? errors.name : null}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={values.name}
                onChange={onInputChange}
                onBlur={onInputBlur}
                />
                <TextField
                error={touched.surname && !!errors.surname}
                helperText={touched.surname ? errors.surname : null}
                name="surname"
                label="Surname"
                variant="outlined"
                fullWidth
                value={values.surname}
                onChange={onInputChange}
                onBlur={onInputBlur}
                />
                <TextField
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : null}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={onInputChange}
                onBlur={onInputBlur}
                />
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    disabled={!isValid}
                >
                    Save
                </Button >
                <Button to=".." component={NavLink} color="error"
                    variant="contained">
                Cancel
                </Button>
            </form>
        </Paper>
    )
}

export default UserForm;
