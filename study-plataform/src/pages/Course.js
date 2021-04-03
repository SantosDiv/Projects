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
    }

    this.contentChapterInText = this.contentChapterInText.bind(this);
    this.courseMainContainer = this.courseMainContainer.bind(this);
  }

  contentChapterInText() {
    const { indexChapter } = this.state;
    const { coursesNew: { courses }, match: { params }  } = this.props;
    const { chapter, session } = params;
    const courseSelected = courses.reduce((acc, crr) => {
      if (crr.name === session) { acc = crr };
      return acc;
    });
    const contentChapter = courseSelected.contents
    .filter(content => content.title === chapter);
    const textHtml = contentChapter[0].sections[indexChapter].content;
    return { __html: textHtml }; // Isso é perigoso, tentar encontrar outra forma
  }

  courseMainContainer() {
    const { match: { params } } = this.props;
    const { chapter, session } = params;
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
          dangerouslySetInnerHTML = {this.contentChapterInText()}
          className="text-content"
          id="section-text-content">
        </section>
        <nav className="navagation-buttons">
          <button
            className="course-navigation-button text-small"
          >
            {'<<'} Voltar
          </button>
          <button
            className="course-navigation-button text-small"
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
