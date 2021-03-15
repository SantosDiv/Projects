import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

class PublicRoutes extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Login /> } />
          <Route path="/dashboard/:username" component={ Dashboard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PublicRoutes;