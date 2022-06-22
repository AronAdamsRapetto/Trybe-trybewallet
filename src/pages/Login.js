import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  state = {
    emailValue: '',
    passwordValue: '',
    isDisabled: true,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.loginValidate);
  }

  loginValidate = () => {
    const { emailValue, passwordValue } = this.state;

    const regex = /\S+@\S+\.\S+/;
    const isEmailValid = regex.test(emailValue);
    const MIN_PASSWORD_LENGTH = 6;

    if (passwordValue.length >= MIN_PASSWORD_LENGTH && isEmailValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  // handleClick = () => {

  // }

  render() {
    const { emailValue, passwordValue, isDisabled } = this.state;
    return (
      <main>
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="emailValue"
            value={ emailValue }
            onChange={ this.handleChange }
            testId="email-input"
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="passwordValue"
            value={ passwordValue }
            onChange={ this.handleChange }
            testId="password-input"
          />
          <Button
            buttonText="Entrar"
            disabled={ isDisabled }
            // onClick={ this.handleClick }
          />
        </form>
      </main>
    );
  }
}

export default Login;
