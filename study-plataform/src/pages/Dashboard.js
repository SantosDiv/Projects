import React from 'react';
import Header from '../components/Header';
import BarProgressModules from '../components/BarProgressModules';
import CourseItem from '../components/CourseItem';
import Materials from '../components/Materials';
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
        <div className="saudation">
          <p className="color-terciary text-medium light-weight">Bem vindo</p>
          <p className="color-primary text-big bold">{ refactoredName }</p>
        </div>
        <BarProgressModules />
        <section className="courses-container">
          { courses.map((course) => <CourseItem key={ course.id } course={ course } />) }
        </section>
        <Materials />
      </>
    )
  }
}

export default Dashboard;