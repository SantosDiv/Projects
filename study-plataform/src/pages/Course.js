import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as api from '../services/dataCourses';
import '../css/BarProgressModules.css';
import '../css/Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexChapter: 0,
      indexSubChapter: 0,
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
    this.clickChapterCompleted = this.clickChapterCompleted.bind(this);
    this.incrementOrDecrementIndexSubChapter = this
      .incrementOrDecrementIndexSubChapter.bind(this);
  }

  componentDidMount() {
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
    this.courses = await api.coursesStudy();
    this.getSubSections(this.courses);
  }

  getSubSections(courses) {
    const { match: { params }  } = this.props;
    const { session, chapter } = params;
    const courseSelected = courses
      .filter((course) => course.name === session);
    this.chapterSelected = courseSelected[0].contents
      .filter(content => content.title === chapter);
    const subSections = this.chapterSelected[0].subSections; // Pega os subChapters
    this.calcPercentage(subSections);
    this.setState({ subSections });
  }

  convertTextSectionInHtml() {
    const { subSections, indexSubChapter } = this.state;
    const textHtml = subSections[indexSubChapter]
      ? subSections[indexSubChapter].content
      : '<p>Lições Concluídas! Avançe para completar :D</p>';
    return { __html: textHtml }; // Isso é perigoso, tentar encontrar outra forma
  }

  changeTaskStatus() {
    const { indexSubChapter, subSections } = this.state;
    const subSectionTaskStatusChanged = subSections
      .map((element) => {
        if(element.id === subSections[indexSubChapter].id) {
          element.taskCompleted = true;
        }
        return element;
      });
    this.calcPercentage(subSectionTaskStatusChanged);
    this.setState({
      subSections: subSectionTaskStatusChanged,
    });
  }

  incrementOrDecrementIndexSubChapter(param) {
    this.setState((oldState) => ({
      indexSubChapter: param === '+'
        ? oldState.indexSubChapter + 1
        : oldState.indexSubChapter - 1
    }));
  }

  clickChapterCompleted() {
    this.setState({ lessonsCompleted: true });
  }

  courseMainContainer() {
    const { match: { params } } = this.props;
    const { session, chapter } = params;
    const { subSections, indexSubChapter, percentage, lessonsCompleted } = this.state;
    if (lessonsCompleted) return <Redirect to={`/winner/${ session }/${ chapter }`} />
    return (
      <section className="course-container">
        <div className="box-titles">
          <h3 className="color-terciary text-small light-weight">Módulo 1</h3>
          <h3 className="color-primary text-small bold">{ session }</h3>
          <h3 className="color-primary text-small light-weight">{ chapter }</h3>
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
            { subSections[indexSubChapter] && subSections[indexSubChapter].chapterTitle}
          </h3>
          { subSections[indexSubChapter] && subSections[indexSubChapter].videoSrc &&
            <div className="box-video">
              <iframe
                title={subSections[indexSubChapter].chapterTitle}
                src={ subSections[indexSubChapter].videoSrc }
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
            onClick={ () => this.incrementOrDecrementIndexSubChapter('-') }
            disabled= { indexSubChapter <= 0 }
          >
            {'<<'} Voltar
          </button>
          { indexSubChapter === subSections.length
            ? <button
                className="course-navigation-button text-small"
                onClick={ () => this.clickChapterCompleted(chapter) }
              >
                Concluir
              </button>
            : <button
                className="course-navigation-button text-small"
                onClick={ () => {
                  this.changeTaskStatus();
                  this.incrementOrDecrementIndexSubChapter('+');
                } }
              >
                Avançar {'>>'}
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

const mapStateToProps = ({ coursesReducer }) => ({
  coursesDB: coursesReducer.courses,
  propChaptersCompleted: coursesReducer.chaptersCompleted,
});

export default connect(mapStateToProps)(Course);
