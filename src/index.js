import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./common/Header";
import { BrowserRouter } from "react-router-dom";

import axios from 'axios';

//set main base url
axios.defaults.baseURL=' http://127.0.0.1:8000/api'
//Bearer Token Save
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <Header/>
  </React.StrictMode>
);

