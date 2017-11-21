import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
 

document.title=(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.LOCALE)
console.log(process.env.REACT_APP_LOCALE)
ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();