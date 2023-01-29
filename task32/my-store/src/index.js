import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';
import AuthProvider from './modules/common/auth/providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom"
// import AuthorizationProvider from './modules/common/authorization/providers/AuthorizationProvider';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import theme from './theme';
// import { ThemeProvider } from '@mui/system';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthorizationProvider>
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ThemeProvider>
//     </AuthorizationProvider>
//   </React.StrictMode>
// );


