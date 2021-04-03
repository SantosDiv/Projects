import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as api from '../services/userValidation';
import { connect } from 'react-redux';
import { sendUsername } from '../actions';
import girl from '../img/girl-study.svg';
import "../css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.authentication = this.authentication.bind(this);
  }

  handlerChange({ target }) {
    const { value, parentNode } = target;
    value === ''
      ? parentNode.classList.add('error-class')
      : parentNode.classList.remove('error-class');
  }

  async authentication(fieldUser, fieldPass) {
    try {
      const { signin } = this.props;
      const LOGIN = 'LOGIN';
      const username = await api.validation(fieldUser, fieldPass);
      const refactoredName = `${username[0].toUpperCase()}${username.substring(1)}`;
      signin(LOGIN, refactoredName);
    } catch (error) {
      alert(error);
    }
  }

  handlerClick() {
    const fieldUser = document.querySelector('#username');
    const fieldPass = document.querySelector('#password');
    const userIsEmpyt = fieldUser.value === '';
    const passIsEmpyt = fieldPass.value === '';

    if (userIsEmpyt) fieldUser.parentNode.classList.add('error-class');
    if (passIsEmpyt) fieldPass.parentNode.classList.add('error-class');

    if (!userIsEmpyt && !passIsEmpyt) {
      this.authentication(fieldUser.value, fieldPass.value);
    }
  }

  render() {
    const { credentials } = this.props;
    const { login } = credentials;
    if (login) return <Redirect to={`/dashboard`} />
    return(
        <main>
          <section className="container-image">
            <img
              src= { girl }
              alt="Ilustração de um mulher lendo um livro em cima de outros livros"
              className="image"
              data-testid="ilustracao-img"
            />
          </section>

          <section className="container-login">
            <h2 className="title terciary">Study login</h2>
            <form className="form">
              <label className="container-input">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  data-testid="field-username"
                  className="input"
                  id="username"
                  placeholder="Username"
                  onChange={ this.handlerChange }
                />
              </label>
              <label className="container-input">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  data-testid="field-password"
                  className="input"
                  id="password"
                  placeholder="Password"
                  onChange={ this.handlerChange }
                />
              </label>
              <Link to="/forgetpass" className="small-text"> Forgot password? </Link>
              <button
                type="button"
                id="button-submit"
                data-testid="button-submit"
                className="button button-login-width"
                onClick= { this.handlerClick }
              >
                  Sign In
              </button>
            </form>
          </section>
        </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signin: (type, username) => dispatch(sendUsername(type, username)),
});

const mapStateToProps = state => ({
  credentials: state.reducerUsername,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);