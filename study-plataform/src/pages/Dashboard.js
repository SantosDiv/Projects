import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardContent from './DashboardContent';
import Profile from './Profile';
import * as api from '../services/dataCourses';
import '../css/Dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.fetchAPICourses = this.fetchAPICourses.bind(this);
    const { match: { params } } = this.props;
    const { username } = params;
    this.state = {
      username,
      courses: [],
    }
  }

  componentDidMount() {
    this.fetchAPICourses();
  }

  async fetchAPICourses() {
    const response = await api.coursesStudy();
    this.setState({
      courses: response,
    });
  }

  render() {
    const { username, courses } = this.state;
    const refactoredName = `${username[0].toUpperCase()}${username.substring(1)}`;
    return (
      <>
        <Header username={ username } />
        <Switch>
          <Route exact path="/dashboard/profile" render={() => <Profile /> }/>
          <Route path="/dashboard" render={() =>
            <DashboardContent courses={ courses } username={ refactoredName } moduleSelected={ this.moduleSelected }/>
          }/>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Dashboard;