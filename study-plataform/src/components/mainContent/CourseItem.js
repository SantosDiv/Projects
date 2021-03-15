import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/CourseItem.css';

class CourseItem extends React.Component {
  render() {
    const { course } = this.props;
    const { name, module } = course;
    return(
      <Link to={`/modulo${module}/${name}`} >
        <section className="course">
          <p>{ name }</p>
          <i className="fas fa-chevron-down"></i>
        </section>
      </Link>
    );
  }
}

export default CourseItem;