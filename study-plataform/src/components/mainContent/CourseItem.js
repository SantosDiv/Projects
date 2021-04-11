import React from 'react';
import ChapterLesson from './ChapterLesson';
import '../../css/CourseItem.css';

class CourseItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      hidden: false,
      styleContents: {display:'none'},
      openAccordion: '',
      animation:{}
    }
  }

  handleClick() {
    const { hidden } = this.state;
    if(!hidden) {
      return this.setState({
        styleContents: {display: 'block'},
        hidden: true,
        openAccordion: 'open-accordion',
        animation: {transform: 'rotateX(180deg)', transition: '0.5s'},
      });
    }
    return this.setState({
        styleContents: {display: 'none'},
        hidden: false,
        openAccordion: '',
        animation: {transition: '0.5s'},
      });
  }

  render() {
    const { styleContents, openAccordion, animation } = this.state;
    const { course } = this.props;
    const { name, contents } = course;
    return(
      <>
        <section className={`course ${openAccordion}`} onClick={ this.handleClick }>
          <p>{ name }</p>
          <i className="fas fa-chevron-down" style={animation}></i>
        </section>
        <ul className="contents" style={styleContents}>
          { contents.map((chapter) =>
            <ChapterLesson key={ chapter.title } chapter={ chapter } nameCourse={ name } />
          )}
        </ul>
      </>
    );
  }
}

export default CourseItem;