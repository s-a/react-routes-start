import {
    //    BrowserRouter as Router,
    //    Route,
    Link
} from 'react-router-dom'
import React/* , { Component } */ from 'react';
// import routes from 'routes.json'

import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';


const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/tacos/bus">Bus</Link></li>
            <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </div>
)



export default Tacos;
