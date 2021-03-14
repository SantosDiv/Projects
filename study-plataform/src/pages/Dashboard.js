import React from 'react';
// import { Redirect } from 'react-router';
import Header from '../components/Header';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    const { username } = params;
    this.state = {
      username,
    }
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <Header />
        <p>Olá, { username } </p>
      </>
    )
  }
}

export default Dashboard;