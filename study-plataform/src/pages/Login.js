import React from 'react';
import { Link } from 'react-router-dom';
import girl from '../img/girl-study.svg';
import "../css/Login.css";

class Login extends React.Component {
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
                />
              </label>
              <Link to="/forgetpass" className="small-text"> Forget password? </Link>
              <button type="submit" id="button-submit" className="button"> Sign In </button>
            </form>
          </section>
        </main>
    );
  }
}

export default Login;