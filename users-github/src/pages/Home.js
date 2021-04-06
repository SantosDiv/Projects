import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAPIGitHub } from '../redux/actions/userAction';
import { repoUser } from '../redux/actions/repoUserAction';
import '../css/Home.css';
import Header from '../components/Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { users, fetchAPIGitHub: fetchUsers, repoUser: getRepo } = this.props;
    const { username } = this.state;
    return (
      <Fragment>
        <Header textTitle="Busque um Usuário" classTitle="title" />
        <section className="main-container">
          <div className="inputs-container">
            <input
              className="input-search"
              type="text"
              name="username"
              value={username}
              placeholder="Nome do jedi"
              onChange={this.handleChange}
            />
            <button type="button" onClick={ () => fetchUsers(username)}> Search</button>
          </div>
          <ul className="list-users">
            {users.map(
              (user) =>
              <Link
                to={`/profile/${user.login}`}
                onClick={ () => getRepo(user.repos_url) }
                key={user.id}
              >
                <li className="item">
                  <img src={ user.avatar_url } alt={`Foto do perfil de ${user.login}`}/>
                  <span>{user.login}</span>
                </li>
              </Link>
            )}
          </ul>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users,
});

const mapDispatchToProps = {
  fetchAPIGitHub,
  repoUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);