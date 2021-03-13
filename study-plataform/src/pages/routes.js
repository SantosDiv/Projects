import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.autentication = this.autentication.bind(this);

    this.state = {
      username: '',
    }
  }

  autentication({ username }) {
    this.setState({
      username,
    });
    return true;
  }

  render() {
    const { username } = this.state;
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>
            <Login autentication={ this.autentication } />
          } />
          <Route path="/dashboard" render={(props) =>
            this.autentication()
            ? (<Dashboard {...props} username= { username } />)
            : (<Redirect to={{pathname: "/", state: { from: props.location }}} />)
          } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;