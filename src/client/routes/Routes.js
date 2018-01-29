// Libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import MainView from '../ui/domain/ViewMain';

// Routes: default using static route (dev)
// will be replaced by import * as RouteMap from '../routes/routeAsync.js' through wepback.config.server.js (code splitting)
import * as RouteMap from '../routes/routeStatic.js';

const Routes = (props) => {
  const {
      location
    } = props;

  return (
    <MainView>
      <Switch>
        <Route exact location={location} path="/" component={RouteMap.IndexPage} />
        <Route exact location={location} path="/home" component={RouteMap.IndexPage} />
        <Route exact location={location} path="/about" component={RouteMap.AboutPage} />
        <Route exact path='/404' component={RouteMap.NotFoundPage} />
        <Redirect to='/404' />
      </Switch>
    </MainView>
  );
}

export default Routes;
