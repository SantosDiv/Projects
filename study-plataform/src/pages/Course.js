import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as api from '../services/dataCourses';
import { fecthCourses } from '../actions/';
import '../css/BarProgressModules.css';
import '../css/Course.css';
import { Redirect } from 'react-router';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexChapter: 0,
      subSections: [],
      percentage: 0,
      lessonsCompleted: false,
    }

    this.convertTextSectionInHtml = this.convertTextSectionInHtml.bind(this);
    this.fetchCoursesFromDB = this.fetchCoursesFromDB.bind(this);
    this.getSubSections = this.getSubSections.bind(this);
    this.courseMainContainer = this.courseMainContainer.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.calcPercentage = this.calcPercentage.bind(this);
    this.incrementOrDecrementIndexChapter = this
      .incrementOrDecrementIndexChapter.bind(this);
  }

  componentDidMount() {
    // const { fecthCourses: getCourses } = this.props;
    // getCourses();
    this.fetchCoursesFromDB();
  }

  calcPercentage(subSectionChanged) {
    const statusCompleted = subSectionChanged.reduce((acc, crr) => {
      if (crr.taskCompleted) acc += 1;
      return acc;
    }, 0);
    this.setState({
      percentage: Math.round(statusCompleted/subSectionChanged.length * 100),
    })
  }

  async fetchCoursesFromDB() {
    const courses = await api.coursesStudy();
    this.getSubSections(courses);
  }

  getSubSections(courses) {
    const { match: { params }  } = this.props;
    const { chapter, session } = params;
    const courseSelected = courses.filter(course => course.name === session);
    const contentChapter = courseSelected[0].contents
      .filter(content => content.title === chapter);
    const subSections = contentChapter[0].subSections;
    this.calcPercentage(subSections);
    this.setState({ subSections });
  }

  convertTextSectionInHtml() {
    const { subSections, indexChapter } = this.state;
    const textHtml = subSections[indexChapter]
      ? subSections[indexChapter].content
      : '<p>Lições Concluídas! Avançe para completar :D</p>';
    return { __html: textHtml }; // Isso é perigoso, tentar encontrar outra forma
  }

  changeTaskStatus() {
    const { indexChapter, subSections } = this.state;
    const subSectionTaskStatusChanged = subSections
      .map((element) => {
        if(element.id === subSections[indexChapter].id) {
          element.taskCompleted = true;
        }
        return element;
      });
    this.calcPercentage(subSectionTaskStatusChanged);
    this.setState({
      subSections: subSectionTaskStatusChanged,
    });
  }

  incrementOrDecrementIndexChapter(param) {
    this.setState((oldState) => ({
      indexChapter: param === '+'
        ? oldState.indexChapter + 1
        : oldState.indexChapter - 1
    }));
  }

  courseMainContainer() {
    const { match: { params } } = this.props;
    const { session } = params;
    const { subSections, indexChapter, percentage, lessonsCompleted } = this.state;
    if (lessonsCompleted) return <Redirect to="/completed" />
    return (
      <section className="course-container">
        <div className="box-titles">
          <h3 className="color-terciary text-small light-weight">Módulo 1</h3>
          <h3 className="color-primary text-small bold">{ session }</h3>
        </div>
        <div className="container-progress">
          <p className="color-primary light-weight text-small-2x">Progresso</p>
          <div className="box-bar-progress">
            <p className="color-primary light-weight text-small-2x percentage">
              {percentage}%
            </p>
            <div className="bar-disable background-secondary">
              <div className="bar-enable background-primary" style={{width: `${percentage}%`}}></div>
            </div>
          </div>
        </div>
        <section className="video-section">
          <h3 className="color-terciary text-small light-weight">
            { subSections[indexChapter] && subSections[indexChapter].chapterTitle}
          </h3>
          { subSections[indexChapter] && subSections[indexChapter].videoSrc &&
            <div className="box-video">
              <iframe
                title={subSections[indexChapter].chapterTitle}
                src={ subSections[indexChapter].videoSrc }
                width="320"
                height="200"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
          }
        </section>
        <section
          dangerouslySetInnerHTML = {this.convertTextSectionInHtml()}
          className="text-content"
          id="section-text-content">
        </section>
        <nav className="navagation-buttons">
          <button
            className="course-navigation-button text-small"
            onClick={ () => this.incrementOrDecrementIndexChapter('-') }
            disabled= { indexChapter <= 0 }
          >
            {'<<'} Voltar
          </button>
          { indexChapter === subSections.length
            ? <button
                className="course-navigation-button text-small"
                onClick={ () => { this.setState({ lessonsCompleted: true })
                } }
              >
                { 'Concluir' }
              </button>
            : <button
                className="course-navigation-button text-small"
                onClick={ () => {
                  this.changeTaskStatus();
                  this.incrementOrDecrementIndexChapter('+');
                } }
              >
                { 'Avançar >>' }
              </button>
          }

        </nav>
      </section>
    );
  }

  /* Importante diogenes - Refaorar o local do css da barra de progresso. Sugiro criar um componente */
  render() {
    return(
      <div>
        <Header />
        { this.courseMainContainer() }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coursesDB: state.coursesReducer,
});

const mapDispatchToProps = {
  fecthCourses,
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
