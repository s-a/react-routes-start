import {
  BrowserRouter as Router,
  Switch, Route,
  Link,
  Redirect
} from 'react-router-dom'
import React, { Component } from 'react';
import JsonDump from './JsonDump.jsx';
import Main from './Main.jsx';
import Tacos from './Tacos.jsx';
import Bus from './Bus.jsx';
import Cart from './Cart.jsx';
import Sandwiches from './Sandwiches.jsx';
import $ from 'jquery';

const locale = require('./language.js')


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locale: process.env.REACT_APP_LOCALE || locale.id,
      api: process.env.REACT_APP_API_ENDPOINT || '//localhost:8001',

    };

    var url = '/api/ping'

    $.ajax({
      url: url,
      headers: {
        'accept-version': (process.env.REACT_APP_ACCEPT_API_VERSION || '~1')
      },
      success: function (result) {
        debugger
        if (result.isOk == false) {
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        debugger
        if (jqXHR.status === 502) {
          alert('It seems that the API server is not running. Start it and reload this page.')
        }
        if (jqXHR.status === 400) {
          alert(jqXHR.responseJSON.message)
        }
      },
      async: false
    });

  }

  render() {
    return (
      <Router>
        <div className="application" >
          <Switch>
            <Redirect from="/" exact to={locale.url(this.state.locale, '')} />
          </Switch>

          <Route exact path="/:locale" component={Main} />
          <Route exact path="/:locale/tacos" component={Tacos} />
          <Route exact path="/:locale/tacos/bus" component={Bus} />
          <Route exact path="/:locale/tacos/cart" component={Cart} />
          <Route exact path="/:locale/sandwiches" component={Sandwiches} />
        </div>
      </Router>
    );
  }

}

export default App;
