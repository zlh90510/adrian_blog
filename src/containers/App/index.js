import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const blogUrl = require('../../utils/webConfig').blogUrl;

const HomePageRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props  => (
   <Component {...props} />
  )}/>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <HomePageRoute path={`${blogUrl}`} component={HomePage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;