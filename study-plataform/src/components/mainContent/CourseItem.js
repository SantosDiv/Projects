import React from 'react';
import { Link } from 'react-router-dom';
import ChapterLesson from './ChapterLesson';
import '../../css/CourseItem.css';

class CourseItem extends React.Component {
  render() {
    const { course } = this.props;
    const { name, module, contents } = course;
    return(
      <Link to={`/modulo${module}/${name}`} >
        <section className="course">
          <p>{ name }</p>
          <i className="fas fa-chevron-down"></i>
        </section>
        <ul className="contents">
          { contents.map((chapter) => <ChapterLesson chapter={ chapter } nameCourse={ name } />)}
        </ul>
      </Link>
    );
  }
}

export default CourseItem;