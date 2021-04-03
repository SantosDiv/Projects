import React from 'react';
import { Link } from 'react-router-dom';
import LinkTo from './MenuBar/LinkTo';
import { sendUsername } from '../actions';
import { connect } from 'react-redux';

import '../css/Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.menuControl = this.menuControl.bind(this);
    this.menuBarMobile = this.menuBarMobile.bind(this);
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
        position: 'fixed',
      },
    });
  }

  menuBarMobile() {
    const { propVisibility } = this.state;
    const icons = {
      home: <i className="fas fa-home"></i>,
      profile: <i className="fas fa-user"></i>,
      achievements: <i className="fas fa-trophy"></i>,
      certificates: <i className="fas fa-certificate"></i>,
    }

    return (
      <nav className="menu-links" style={propVisibility}>
        <div className="close-icon">
          <button type="button" onClick={() =>
            this.menuControl({animation: 'slideOut 1s', left: '-300px'})}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="links-container">
          <LinkTo
            nameItem="Home"
            path={ '' }
            icon={ icons.home }
            menuControl={ this.menuControl }
          />

          <LinkTo
            nameItem="Perfil"
            path="profile"
            icon={ icons.profile }
            menuControl={ this.menuControl }
          />

          <LinkTo
            nameItem="Conquistas"
            path="achievements"
            icon={ icons.achievements }
            menuControl={ this.menuControl }
          />

          <LinkTo
            nameItem="Certificados"
            path="certificates"
            icon={ icons.certificates }
            menuControl={ this.menuControl }
          />
        </ul>
      </nav>
    );
  }

  render() {
    const { signup } = this.props;
    const LOGOUT = 'LOGOUT';
    return (
      <header className="header-container">
        <div className="menu-container">
          <button className="button-menu color-primary" onClick={() =>
            this.menuControl({visibility: 'visible', animation: 'slideIn 1s'})}>
           <i className="fas fa-bars"></i>
          </button>
          { this.menuBarMobile() }
        </div>
        <div className="box-xp-signout">
          <p className="text-small color-primary">100 Xp</p>
          <Link to="/" onClick={() => signup(LOGOUT)} className="color-primary">
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (type, username) => dispatch(sendUsername(type, username)),
});

export default connect(null, mapDispatchToProps)(Header);
