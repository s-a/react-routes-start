import {
    BrowserRouter as Router,
    Switch, Route,
    Link,
    Redirect
} from 'react-router-dom'
import React/* , { Component }  */ from 'react';

import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';
import JsonDump from './JsonDump.jsx';
import routes from './routes.jsx';
const locale = require('./language.js')

var T = require('i18n-react').default;



const Main = (path) => (
    <div>
        <h2>Main</h2>

        <JsonDump data={path.match.params.locale}></JsonDump>
        <div>
            <strong>{T.translate("welcome", { username: "Bruce Wayne" })}</strong>
            <ul>
                <li><Link to={locale.url(path.match.params.locale, 'tacos')}>tacos</Link></li>
                <li><Link to={locale.url(path.match.params.locale, 'sandwiches')}>Sandwiches</Link></li>
            </ul>

        </div>

    </div>
)
export default Main;
