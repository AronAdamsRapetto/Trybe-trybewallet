import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  state = {
    emailValue: '',
    passwordValue: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  // handleClick = () => {

  // }

  render() {
    const { emailValue, passwordValue } = this.state;
    return (
      <main>
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="emailValue"
            value={ emailValue }
            onChange={ this.handleChange }
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="passwordValue"
            value={ passwordValue }
            onChange={ this.handleChange }
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
