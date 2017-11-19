import {
  BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
import React, { Component } from 'react';
import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';
import routes from './routes.jsx';
import { withRouter } from 'react-router'

var T = require('i18n-react').default;

var translations = {
  welcome: "Guten Tag {username}!",
  buttons: {
    exit: "Schließen",
    start: "Starten"
  }
}

T.setTexts(require('./locales/es.json'));
// Render component again ... voila in Spanish
// this.forceUpdate();

// you can combine this solution with markdown!
T.setTexts(translations, {
  notFound: key => `**${key}**` // will render <strong>SomeKey</strong>
})

// Set some texts
T.setTexts(translations);


class App extends Component {



  render() {
    const { match, location, history } = this.props
    return (
      <Router>
        <div>
          <div>You are now at {this.props.location}</div>

          <strong>{T.translate("welcome", { username: "Bruce Wayne" })}</strong>
          <ul>
            <li><Link to="/tacos">Tacos</Link></li>
            <li><Link to="/sandwiches">Sandwiches</Link></li>
          </ul>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </Router>

    );
  }
}

export default App;
