import {
  BrowserRouter as Router,
  Switch, Route,
  Link,
  Redirect
} from 'react-router-dom'
import React, { Component } from 'react';

import routes from './routes.jsx';

import JsonDump from './JsonDump.jsx';
import Main from './Main.jsx';
import Tacos from './Tacos.jsx';
import Bus from './Bus.jsx';
import Cart from './Cart.jsx';
import Sandwiches from './Sandwiches.jsx';


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



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { locale: process.env.REACT_APP_LOCALE || locale.id };
    debugger;
    // you can combine this solution with markdown!
    T.setTexts(dictionary[this.state.locale], {
      notFound: key => `**${key}**` // will render <strong>SomeKey</strong>
    })
  }


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect from="/" exact to={locale.url(this.state.locale, '', this.props)} />
          </Switch>

          <Route path="/:locale" component={Main} />
          <Route path="/:locale/tacos" component={Tacos} />
          <Route path="/:locale/tacos/bus" component={Bus} />
          <Route path="/:locale/tacos/cart" component={Cart} />
          <Route path="/:locale/sandwiches" component={Sandwiches} />
        </div>
      </Router>
    );
  }
}

export default App;
