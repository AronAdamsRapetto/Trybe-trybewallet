import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <main>
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            // value={ emailValue }
            // onChange={ this.handleChange }
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            // value={ passwordValue }
            // onChange={ this.handleChange }
          />
          <Button
            buttonText="Entrar"
            // onClick={ this.handleClick }
          />
        </form>
      </main>
    );
  }
}

export default Login;
