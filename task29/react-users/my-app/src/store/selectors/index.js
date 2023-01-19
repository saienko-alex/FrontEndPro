import { createStore } from 'redux';
import contactsReducers from '../reducers/contactsReducers';

const store = createStore(contactsReducers);

export default store;