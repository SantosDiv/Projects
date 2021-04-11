import React from 'react';
import { Link } from 'react-router-dom';

class ChapterLesson extends React.Component {
  render() {
    const { nameCourse, chapter } = this.props;
    return(
      <Link to={`/course/${nameCourse}/${chapter.title}`}>
        <li className="lesson">{ chapter.title }</li>
      </Link>
    );
  }
}

export default ChapterLesson;