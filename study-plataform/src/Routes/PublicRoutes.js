import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Course from '../pages/Course';

class PublicRoutes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route exact path="/course/:session/:chapter" component={ Course } />
        <Route render={() => <p>Página não encontrada</p>} />
      </Switch>
    );
  }
}

export default PublicRoutes;