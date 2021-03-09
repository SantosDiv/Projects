import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';
class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <nav className="menu-container">
          <a href="/dashboard" className="icon"><i className="fas fa-bars"></i></a>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <div className="box-links">
            <p>100 Xp</p>
            <a href="/" className="icon"><i className="fas fa-sign-out-alt"></i></a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;