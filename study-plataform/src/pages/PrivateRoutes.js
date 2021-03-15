import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

class PrivateRoutes extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard/:username" component={ Dashboard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PrivateRoutes;