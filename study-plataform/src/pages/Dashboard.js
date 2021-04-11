import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fecthCourses } from '../actions';
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
    this.state = {
      courses: [],
    }
  }

  componentDidMount() {
    const { fecthCourses: getDataCourses } = this.props;
    this.fetchAPICourses();
    getDataCourses();
  }

  async fetchAPICourses() {
    const response = await api.coursesStudy();
    this.setState({
      courses: response,
    });
  }

  render() {
    const { courses } = this.state;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/dashboard/profile" render={() => <Profile /> }/>
          <Route path="/dashboard" render={() =>
            <DashboardContent courses={ courses } />
          }/>
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  fecthCourses,
}

export default connect(null, mapDispatchToProps)(Dashboard);