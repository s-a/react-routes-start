import {
    //    BrowserRouter as Router,

    Link
} from 'react-router-dom'
import React/* , { Component } */ from 'react';
import JsonDump from './JsonDump.jsx';
const locale = require('./language.js')


const Tacos = (path) => (
    <div>
        <h2>Tacos</h2>
        <JsonDump data={path.match.params.locale}></JsonDump>

        <ul>
            <li><Link to={locale.url(path.match.params.locale, 'tacos/bus')} >Bus {""}</Link></li>
            <li><Link to={locale.url(path.match.params.locale, 'tacos/cart')}>Cart </Link></li>
        </ul>


    </div>
)

export default Tacos;
