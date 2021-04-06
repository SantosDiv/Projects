import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { users, textTitle, classTitle, username } = this.props;
    const userSelected = users.find((user) => user.login === username);
    return(
      <header className="header">
        <Link to="/">
          <AiFillHome className="home-icon" />
        </Link>
        <AiFillGithub className="icon"/>
        { userSelected
          && <a href={userSelected.html_url} target="_blanck">
            <img src={userSelected.avatar_url} alt={userSelected.login}/>
          </a>}
        <h2 className={classTitle}>{ textTitle }</h2>
      </header>
    )
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users
});

export default connect(mapStateToProps)(Header);
