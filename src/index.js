/** @jsxRuntime classic */    // wyłączenie wbudowanego mechanizmu transformacji na tryb wcześniejszy
import 'react-app-polyfill/ie11';   // wstępnie zapewnia uruchomienie projektu w IE 11 
import 'core-js/stable';    // cały folder jest importowany

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
