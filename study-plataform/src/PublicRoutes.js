import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

class PublicRoutes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/dashboard/:username" component={ Dashboard } />
      </Switch>
    );
  }
}

export default PublicRoutes;