import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getDataFormLogin = this.getDataFormLogin.bind(this);

    this.state = {
      username: '',
      password: '',
    }
  }

  getDataFormLogin({ username, password }) {
    console.log(username);
    this.setState({
      username,
      password,
    })
  }

  render() {
    const { username, password } = this.state;
    console.log(password);
    return (
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

export default App;
