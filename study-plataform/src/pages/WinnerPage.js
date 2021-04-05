import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import winnerImg from '../img/winners.svg';
import '../css/WinnerPage.css';
class WinnerPage extends React.Component {
  render() {
    const { match: { params: { session } } } = this.props;
    return(
      <React.Fragment>
        <header className="header-page-winner">
          <Link to="/Dashboard" className="color-primary">
            <span class="fas fa-arrow-left"></span>
          </Link>
          <p className="text-medium color-primary">100 xp</p>
        </header>
        <section className="section-winner-feedback">
          <h3 className="text-big color-primary">You Win</h3>
          <img
            src= { winnerImg }
            alt="Ilustração de um troféu com pessoas comemorando a vitória"
          />
          <p className="text-medium light-weight color-primary">{ session }</p>
          <p className="text-medium bold color-primary">Concluído</p>
          <h1 className="text-big-2x color-secondary light-weight points">+400XP</h1>
          <p className="text-small color-primary">Parabéns você merece</p>

          <Link to="/dashboard">
            <button
              type="button"
              className="course-navigation-button text-medium button-back-home"
            >
              Início
            </button>
          </Link>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default WinnerPage;