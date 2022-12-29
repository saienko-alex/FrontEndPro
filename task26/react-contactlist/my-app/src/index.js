import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContactsBook from './modules/common/components/ContactsBook';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContactsBook />
    </BrowserRouter>);


