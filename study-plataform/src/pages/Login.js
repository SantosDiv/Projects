import React from 'react';
import { Link } from 'react-router-dom';

import girl from '../img/girl-study.svg';
import "../css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);

  }

  handlerChange({ target }) {
    const { value, parentNode } = target;
    value === ''
      ? parentNode.classList.add('error-class')
      : parentNode.classList.remove('error-class');
  }

  handlerClick() {
    const { getDataFormLogin } = this.props;
    const fieldUser = document.querySelector('#username');
    const fieldPass = document.querySelector('#password');
    const userIsEmpyt = fieldUser.value === '';
    const passIsEmpyt = fieldPass.value === '';

    if (userIsEmpyt) fieldUser.parentNode.classList.add('error-class');
    if (passIsEmpyt) fieldPass.parentNode.classList.add('error-class');

    if (!userIsEmpyt && !passIsEmpyt) {
      const login = {
        username: fieldUser.value,
        password: fieldPass.value,
      }
      getDataFormLogin(login);
    }
  }

  render() {
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
              <Link
                to="/dashboard"
                id="button-submit"
                className="button"
                onClick= { this.handlerClick }
              >
                  Sign In
              </Link>
            </form>
          </section>
        </main>
    );
  }
}

export default Login;