import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google';
import config from './config';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = localStorage.getItem('clientId') || config.clientId;
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
reportWebVitals();
