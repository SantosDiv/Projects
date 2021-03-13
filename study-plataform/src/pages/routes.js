import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.getDataFormLogin = this.getDataFormLogin.bind(this);

    this.state = {
      username: '',
      password: '',
    }
  }

  getDataFormLogin({ username, password }) {
    this.setState({
      username,
      password,
    })
  }

  render() {
    const { username, password } = this.state;
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>
            <Login getDataFormLogin={ this.getDataFormLogin } />
          } />
          <Route path="/dashboard" render={(props) =>
            <Dashboard {...props} username= { username } password= { password } />
          } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;