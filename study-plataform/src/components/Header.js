import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.menuControl = this.menuControl.bind(this);

    this.state = {
      propVisibility: {visibility: 'hidden'},
    }
  }

  menuControl(property) {
    this.setState({
      propVisibility: {visibility: property},
    });
  }


  render() {
    const { propVisibility } = this.state;
    return (
      <header className="header-container">
        <nav className="menu-container">
          <button className="button-menu" onClick={() => this.menuControl('visible')}>
           <i className="fas fa-bars"></i>
          </button>
          <nav className="menu-links" style={propVisibility}>
            <div className="close-icon">
              <button type="button" onClick={() => this.menuControl('hidden')}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="links-container">
              <Link to="/" className="link">
                <li>Home</li>
                <i className="fas fa-home"></i>
              </Link>
              <Link to="/" className="link">
                <li>Perfil</li>
                <i className="fas fa-user"></i>
              </Link>
              <Link to="/" className="link">
                <li>Conquistas</li>
                <i className="fas fa-trophy"></i>
              </Link>
              <Link to="/" className="link">
                <li>Certificados</li>
                <i className="fas fa-certificate"></i>
              </Link>
            </ul>
          </nav>
          <div className="box-right">
            <p>100 Xp</p>
            <a href="/" className="icon"><i className="fas fa-sign-out-alt"></i></a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;