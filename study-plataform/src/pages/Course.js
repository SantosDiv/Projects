import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as api from '../services/dataCourses';
import { fecthCourses } from '../actions/';
import '../css/BarProgressModules.css';
import '../css/Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexChapter: 0,
      subSection: [],
      percentage: 0
    }

    this.convertTextSectionInHtml = this.convertTextSectionInHtml.bind(this);
    this.getTextFromDB = this.getTextFromDB.bind(this);
    this.courseMainContainer = this.courseMainContainer.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.calcPercentage = this.calcPercentage.bind(this);
    this.incrementOrDecrementIndexChapter = this
      .incrementOrDecrementIndexChapter.bind(this);
  }

  componentDidMount() {
    // const { fecthCourses: getCourses } = this.props;
    // getCourses();
    this.getTextFromDB();
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

  async getTextFromDB() {
    const courses = await api.coursesStudy();
    const { match: { params }  } = this.props;
    const { chapter, session } = params;
    const courseSelected = courses.filter(course => course.name === session);
    const contentChapter = courseSelected[0].contents
      .filter(content => content.title === chapter);
    const subSection = contentChapter[0].subSection;
    this.calcPercentage(subSection);
    this.setState({ subSection });
  }

  convertTextSectionInHtml() {
    const { subSection, indexChapter } = this.state;
    const textHtml = subSection.length ? subSection[indexChapter].content : '';
    return { __html: textHtml }; // Isso é perigoso, tentar encontrar outra forma
  }

  changeTaskStatus() {
    const { indexChapter, subSection } = this.state;
    const subSectionTaskStatusChanged = subSection
      .map((element) => {
        if(element.id === subSection[indexChapter].id) {
          element.taskCompleted = true;
        }
        return element;
      });
    this.calcPercentage(subSectionTaskStatusChanged);
    this.setState((oldState) => ({
      subSection: subSectionTaskStatusChanged,
    }));
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
    const { subSection, indexChapter, percentage } = this.state;
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
            { subSection[indexChapter] && subSection[indexChapter].chapterTitle}
          </h3>
          { subSection[indexChapter] && subSection[indexChapter].videoSrc &&
            <div className="box-video">
              <iframe
                title={subSection[indexChapter].chapterTitle}
                src={ subSection[indexChapter].videoSrc }
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
            disabled= { indexChapter <= 0 && true }
          >
            {'<<'} Voltar
          </button>
          <button
            className="course-navigation-button text-small"
            onClick={ () => {
              this.changeTaskStatus();
              this.incrementOrDecrementIndexChapter('+');
              } }
            disabled= { indexChapter >= subSection.length - 1 && true }
          >
            Avançar {'>>'}
          </button>
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
