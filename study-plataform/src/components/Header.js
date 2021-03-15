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

  menuControl({ visibility, animation, left }) {
    this.setState({
      propVisibility: {
        visibility,
        animation,
        left,
      },
    });
  }

  render() {
    const { propVisibility } = this.state;
    const { username } = this.props;
    return (
      <header className="header-container">
        <div className="menu-container">
          <button className="button-menu color-primary" onClick={() =>
            this.menuControl({visibility: 'visible', animation: 'slideIn 2s'})}>
           <i className="fas fa-bars"></i>
          </button>
          <nav className="menu-links" style={propVisibility}>
            <div className="close-icon">
              <button type="button" onClick={() =>
                this.menuControl({animation: 'slideOut 2s', left: '-300px'})}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="links-container">
              <Link to={ `/dashboard/${username}` } className="link">
                <li>Home</li>
                <i className="fas fa-home"></i>
              </Link>
              <Link to="/dashboard/profile" className="link">
                <li>Perfil</li>
                <i className="fas fa-user"></i>
              </Link>
              <Link to="/achievements" className="link">
                <li>Conquistas</li>
                <i className="fas fa-trophy"></i>
              </Link>
              <Link to="/certificates" className="link">
                <li>Certificados</li>
                <i className="fas fa-certificate"></i>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="box-xp-signout">
          <p className="text-small color-primary">100 Xp</p>
          <Link to="/" className="color-primary"><i className="fas fa-sign-out-alt"></i></Link>
        </div>
      </header>
    )
  }
}

export default Header;