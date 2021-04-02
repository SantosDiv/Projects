import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/BarProgressModules.css';
import '../css/Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.contentChapterInText = this.contentChapterInText.bind(this);
  }

  contentChapterInText() {
    return(
      <section className="text-content">
        <p>
          Para acessar o bash no linux tecle:
        </p>
        <code> Ctrl + alt + T</code>
        <p>
            Você pode criar pastas, deletar,
            percorrer por dentro do seu computador usando apenas o seu terminal.
            Isso não é lindo? :)
            Vamos ver alguns comando legais durante esse curso de introdução.
            Vamos lá, avançar!
        </p>
      </section>
    )
  }

  /* Importante diogenes - Refaorar o local do css da barra de progresso. Sugiro criar um componente */
  render() {
    const { match: { params } } = this.props;
    const { chapter, session } = params;

    return(
      <div>
        <Header />
        <section className="course-container">
          <div className="box-titles">
            <h3 className="color-terciary text-small light-weight">Módulo 1</h3>
            <h3 className="color-primary text-small bold">{ session }</h3>
          </div>
          <div className="container-progress">
            <p className="color-primary light-weight text-small-2x">Progresso</p>
            <div className="bar-disable background-secondary">
              <div className="bar-enable background-primary"></div>
              <p className="color-primary light-weight text-small-2x percentage">
                20%
              </p>
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
                allowfullscreen>
              </iframe>
            </div>
          </section>
          { this.contentChapterInText() }
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
        <Footer />
      </div>
    );
  }
}

export default Course;