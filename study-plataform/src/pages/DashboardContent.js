import React from 'react';
import BarProgressModules from '../components/mainContent/BarProgressModules';
import CourseItem from '../components/mainContent/CourseItem';
import Materials from '../components/mainContent/Materials';

class DashboardContent extends React.Component {
  render() {
    const { courses, username } = this.props;
    return(
      <>
        <div className="saudation">
          <p className="color-terciary text-medium light-weight">Bem vindo(a)</p>
          <p className="color-primary text-big bold">{ username }</p>
        </div>
        <BarProgressModules />
        <section className="courses-container">
          { courses.map((course) => <CourseItem key={ course.id } course={ course } />) }
        </section>
        <Materials />
      </>
    );
  }
}

export default DashboardContent;