import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/BarProgressModules.css';
import '../css/Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexChapter: 0,
      subSection: [],
    }

    this.convertTextSectionInHtml = this.convertTextSectionInHtml.bind(this);
    this.getTextFromDB = this.getTextFromDB.bind(this);
    this.courseMainContainer = this.courseMainContainer.bind(this);
    this.incrementOrDecrementIndexChapter = this
      .incrementOrDecrementIndexChapter.bind(this);
  }

  incrementOrDecrementIndexChapter(param) {
    this.setState((oldState) => ({
      indexChapter: param === '+'
        ? oldState.indexChapter + 1
        : oldState.indexChapter - 1
    }));
  }

  componentDidMount() {
    this.getTextFromDB();
  }

  getTextFromDB() {
    const { coursesNew: { courses }, match: { params }  } = this.props;
    const { chapter, session } = params;
    const courseSelected = courses.filter(course => course.name === session);
    const contentChapter = courseSelected[0].contents
    .filter(content => content.title === chapter);
    const subSection = contentChapter[0].subSection;
    this.setState({ subSection });
  }

  convertTextSectionInHtml() {
    const { subSection, indexChapter } = this.state;
    const textHtml = subSection.length ? subSection[indexChapter].content : '';
    return { __html: textHtml }; // Isso é perigoso, tentar encontrar outra forma
  }

  courseMainContainer() {
    const { match: { params } } = this.props;
    const { chapter, session } = params;
    const { subSection, indexChapter } = this.state;
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
              20%
            </p>
            <div className="bar-disable background-secondary">
              <div className="bar-enable background-primary"></div>
            </div>
          </div>
        </div>
        <section className="video-section">
          <h3 className="color-terciary text-small light-weight">{ chapter }</h3>
          <div className="box-video">
            <iframe
              width="320"
              height="190"
              src="https://www.youtube.com/embed/vXu9BS6D2QA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowfullscreen
            >
            </iframe>
          </div>
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
            onClick={ () => this.incrementOrDecrementIndexChapter('+') }
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
  coursesNew: state.coursesReducer,
});

export default connect(mapStateToProps)(Course);
