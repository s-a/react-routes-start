import {
    BrowserRouter as Router,
    Switch, Route,
    Link,
    Redirect
} from 'react-router-dom'
import React, { Component } from 'react';

import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';
import JsonDump from './JsonDump.jsx';
import routes from './routes.jsx';
const locale = require('./language.js')

var T = require('i18n-react').default;



var dictionary = {
    "de-DE": {
        welcome: "Guten Tag {username}!"
    },
    "en-GB": {
        welcome: "Welcome {username}!"
    }
}

// T.setTexts(require('./locales/es.json'));
// Render component again ... voila in Spanish
// this.forceUpdate();



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { locale: this.props.match.params.locale };

        // you can combine this solution with markdown!
        T.setTexts(dictionary[this.state.locale], {
            notFound: key => `**${key}**` // will render <strong>SomeKey</strong>
        })
    }

    onClick(e) {
        T.setTexts(dictionary[e.target.dataset.locale], {
            notFound: key => `**${key}**` // will render <strong>SomeKey</strong>
        })
        this.setState({ locale: e.target.dataset.locale })
    }


    render(path) {
        return (
            <div>
                <ul>
                    <li><Link data-locale={'de-DE'} onClick={this.onClick.bind(this)} to={locale.url('de-DE', '')}>Deutsch</Link></li>
                    <li><Link data-locale={'en-GB'} onClick={this.onClick.bind(this)} to={locale.url('en-GB', '')}>English</Link></li>
                </ul>

                <h2>Main</h2>

                <JsonDump data={this.state.locale}></JsonDump>
                <div>
                    <strong>{T.translate("welcome", { username: "Bruce Wayne" })}</strong>
                    <ul>
                        <li><Link to={locale.url(this.state.locale, 'tacos')}>tacos</Link></li>
                        <li><Link to={locale.url(this.state.locale, 'sandwiches')}>Sandwiches</Link></li>
                    </ul>

                </div>

            </div>
        )
    }
}
export default Main;
