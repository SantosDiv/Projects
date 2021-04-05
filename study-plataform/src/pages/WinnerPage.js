import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import winnerImg from '../img/winners.svg';

class WinnerPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <header className="header-page-winner">
          <Link to="/Dashboard"><span class="fas fa-arrow-left"></span></Link>
          <p className="text-small color-primary">100 xp</p>
        </header>
        <section className="section-winner-feedback">
          <h3 className="text-big color-primary">You Win</h3>
          <img
            src= { winnerImg }
            alt="Ilustração de um troféu com pessoas comemorando a vitória"
          />
          <p className="text-medium light-weight color-primary">Introdução a Bash</p>
          <p className="text-medium bold color-primary">Concluído</p>
          <h1 className="text-big-2x color-secondary light-weight">+400XP</h1>
          <p className="text-small color-primary">Parabéns você merece</p>

          <Link to="/dashboard">
            <button type="button" className="course-navigation-button text-medium">Início</button>
          </Link>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default WinnerPage;