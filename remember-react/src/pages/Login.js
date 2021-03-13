import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import dataUser from '../Data';
import Dashboard from './Dashboard';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      username: '',
      password: '',
      validation: false,
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    const { username, password } = this.state;
    event.preventDefault();
    dataUser.forEach((user) => {
      if (user.name === username && user.password === password) {
        this.setState({
          validation: true,
        })
      } else {
        alert('Dados incorretos');
      }
    });
  }

  handleForm() {
    return(
      <form>
        <fieldset>
          <div className="form-group ls-login-user">
            <label for="userLogin">Usuário</label>
            <input
              className="form-control ls-login-bg-user input-lg"
              id="userLogin"
              type="text"
              aria-label="Usuário"
              placeholder="Usuário"
              name="username"
              onChange={ this.handleChange }
            />
          </div>

          <div className="form-group ls-login-password">
            <label for="userPassword">Senha</label>
            <input
              className="form-control ls-login-bg-password input-lg"
              id="userPassword"
              type="password"
              name="password"
              aria-label="Senha"
              placeholder="Senha"
              onChange={ this.handleChange }
            />
          </div>

          {/* <a href="#" className="ls-login-forgot">Esqueci minha senha</a> */}
          <button onClick={ this.handleClick } type="submit">Sing In</button>
          <p className="txt-center ls-login-signup">Não possui um usuário na Locaweb?
            {/* <a href="#">Cadastre-se agora</a> */}
          </p>
        </fieldset>
      </form>
    );
  }

  render() {
    const { validation, username } = this.state;
    if (validation) {
      return <Redirect to={`/dashboard/${username}`} />
      // return <Redirect to={{pathname: '/dashboard', user:username }} />
    }
    return (
      <div className="box-parent-login">
        <div className="well bg-white box-login">
          <h1 className="ls-login-logo">Login</h1>
          { this.handleForm() }
        </div>
      </div>
    );
  }
}

export default Login;