import React from 'react';
import Header from '../components/Header';
import '../css/Dashboard.css';

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
    const refactoredName = `${username[0].toUpperCase()}${username.substring(1)}`;
    return (
      <>
        <Header username={ username } />
        <div className="saudation">
          <p className="color-terciary text-medium light-weight">Bem vindo</p>
          <p className="color-primary text-big bold">{ refactoredName }</p>
        </div>
      </>
    )
  }
}

export default Dashboard;