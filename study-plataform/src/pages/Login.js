import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as api from '../services/userValidation';

import girl from '../img/girl-study.svg';
import "../css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);

    this.state = {
      shouldRedirect: false,
      username: '',
    }

  }

  handlerChange({ target }) {
    const { value, parentNode } = target;
    value === ''
      ? parentNode.classList.add('error-class')
      : parentNode.classList.remove('error-class');
  }

  handlerClick() {
    const fieldUser = document.querySelector('#username');
    const fieldPass = document.querySelector('#password');
    const userIsEmpyt = fieldUser.value === '';
    const passIsEmpyt = fieldPass.value === '';

    if (userIsEmpyt) fieldUser.parentNode.classList.add('error-class');
    if (passIsEmpyt) fieldPass.parentNode.classList.add('error-class');

    if (!userIsEmpyt && !passIsEmpyt) {
      this.setState(
        {
          shouldRedirect: false,
        },
        async () => {
          try {
            const usernameTrue = await api.validation(fieldUser.value, fieldPass.value);
            this.setState({
              shouldRedirect: true,
              username: usernameTrue,
            });
          } catch (error) {
            alert(error);
          }
        }
        );
    }
  }

  render() {
    const { shouldRedirect, username } = this.state;
    if (shouldRedirect) return <Redirect to={`/dashboard/${username}`} />
    return(
        <main>
          <section className="container-image">
            <img
              src= { girl }
              alt="Ilustração de um mulher lendo um livro em cima de outros livros"
              className="image"
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
                  className="input"
                  id="password"
                  placeholder="Password"
                  onChange={ this.handlerChange }
                />
              </label>
              <Link to="/forgetpass" className="small-text"> Forget password? </Link>
              <button
                type="button"
                id="button-submit"
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

export default Login;