import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const blogUrl = require('../../utils/webConfig').blogUrl;

const history = createHashHistory();

const HomePageRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props  => (
   <Component {...props} />
  )}/>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history} >
          <Switch>
            <HomePageRoute path='/blog' component={HomePage}/>
            <Route path='/page/:pageNmae' component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;