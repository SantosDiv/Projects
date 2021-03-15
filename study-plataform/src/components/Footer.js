import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return(
      <section className="footer">
        <p>All rights reservad</p>
        <p>Com <i className="fas fa-heart"></i> Diogenes Santos</p>
      </section>
    );
  }
}

export default Footer;