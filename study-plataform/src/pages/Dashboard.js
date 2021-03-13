import React from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const { username, password } = this.props;
    this.state = {
      username,
      password,
    }
  }

  render() {
    const { username, password } = this.state;
    if(!(username === "diogenes" && password === "1234")) {
      alert("Dados incorretos :(")
      return <Redirect to="/" />
    }
    return (
      <>
        <Header />
        <p>Olá, { username } </p>
      </>
    )
  }
}

export default Dashboard;