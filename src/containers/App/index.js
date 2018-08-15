import React, { Component } from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const blogUrl = require('../../utils/webConfig').blogUrl;

const history = createHashHistory();


class App extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Redirect exact from="/" to={`${blogUrl}`} />
          <Route path={`/${blogUrl}`} component={HomePage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;