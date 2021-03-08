import React from 'react';
import { Redirect } from 'react-router';

class Dashboard extends React.Component {
  render() {
    const { username, password } = this.props;
    if(!(username === "diogenes" && password === "1234")) {
      alert("Dados incorretos :(")
      return <Redirect to="/" />
    }
    return (
      <p>Olá, { username } </p>
    )
  }
}

export default Dashboard;