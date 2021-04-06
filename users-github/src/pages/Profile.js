import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RiGitRepositoryFill } from "react-icons/ri";
import '../css/Profile.css';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    const {
      repositories,
      match: { params: { username } },
      isRequest } = this.props;
    const repositoriesFiltred = repositories.slice(0,3);

    if (isRequest) return <div class="loading"> </div>
    return (
      <Fragment>
        <Header
          textTitle={`Principais repositórios de: ${username}`}
          classTitle="title-profile"
          username={username}
        />
        { repositoriesFiltred.map((repo) =>
          <div key={repo.id} className="repo-container">
            <div>
              <h5>Título</h5>
              <p>{repo.name}</p>
              <h5>Descrição</h5>
              <p>{repo.description}</p>
            </div>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <RiGitRepositoryFill /> Ver Repositório
            </a>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ repoReducer }) => ({
  repositories: repoReducer.repositories,
  isRequest: repoReducer.isRequest,
});

export default connect(mapStateToProps)(Profile);
