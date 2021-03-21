import React from 'react';
import BarProgressModules from '../components/mainContent/BarProgressModules';
import CourseItem from '../components/mainContent/CourseItem';
import Materials from '../components/mainContent/Materials';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.moduleSelected = this.moduleSelected.bind(this);

    this.state = {
      module: 1,
    }
  }

  moduleSelected(module) {
    this.setState({ module, });
  }

  render() {
    const { username, courses } = this.props;
    const { module } = this.state;
    const coursesFiltred = courses.filter((course) => course.module === module);
    return(
      <>
        <div className="saudation">
          <p className="color-terciary text-medium light-weight">Bem vindo(a)</p>
          <p className="color-primary text-big bold">{ username }</p>
        </div>
        <BarProgressModules moduleSelected={ this.moduleSelected } />
        <section className="courses-container">
          { coursesFiltred.map((course) => <CourseItem key={ course.id } course={ course } />) }
        </section>
        <Materials />
      </>
    );
  }
}

export default DashboardContent;