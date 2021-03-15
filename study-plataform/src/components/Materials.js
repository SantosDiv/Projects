import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Materials.css';

class Materials extends React.Component {
  render() {
    return(
      <section className="section-materials">
        <Link to="/list-answers" className="button-line">
          Gabaritos
        </Link>
        <Link to="/texts" className="button-line">
          Textos
        </Link>
        <Link to="/recorded-lessons" className="button lessons">
          Aulas Gravadas
        </Link>
      </section>
    );
  }
}

export default Materials;