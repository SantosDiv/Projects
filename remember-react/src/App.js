import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/dashboard/:user" render={(props) => <Dashboard {...props} />}/>
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
