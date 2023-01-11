import { createStore, applyMiddleware } from 'redux';
import contactsReducers from '../reducers/contactsReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { getUsers } from '../actions/contacts';


const middlewares = applyMiddleware(thunk, logger);
const store = createStore(contactsReducers, middlewares);
store.dispatch(getUsers());


export default store;