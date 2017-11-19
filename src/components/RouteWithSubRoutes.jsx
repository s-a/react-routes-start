import {
    Route/* ,
    Link */
} from 'react-router-dom'
import React/* , { Component } */ from 'react';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )} />
)


export default RouteWithSubRoutes;
