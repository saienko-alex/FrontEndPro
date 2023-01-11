import api from '../../api';

export const LOADING_DATA = 'LOADING_DATA';
export function loadingData(payload) {
    return { type: LOADING_DATA, payload };
}

export const DELETE_USER = 'DELETE_USER';
export function deleteUser(id) {
    return (dispatch) => {
        api.delete('users/' + id).then(() => dispatch({ type: DELETE_USER, payload: id }));
    };
}


export const CREATE_USER = 'CREATE_USER';
export function createUser(newContact) {
    return (dispatch) => {
        api.post('users', {...newContact}).then(({ data }) => dispatch({ type: CREATE_USER, payload: data }));
    };
}

export const SET_USER = 'SET_USER';
export function setUser(payload) {
    return { type: SET_USER, payload };
}

export function getUsers() {
    return (dispatch) => {
        dispatch(loadingData(true));
        api.get('users').then(({ data }) => dispatch(setUser(data)));
        dispatch(loadingData(false));
    }
}