import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';
import './styleSheet/Login.css';

class Login extends React.Component {
  state = {
    emailValue: '',
    passwordValue: '',
    isDisabled: true,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.loginValidate);
  }

  // Regex para validação de email consultada no link abaixo.
  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
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

  handleClick = () => {
    const { emailValue } = this.state;
    const { login, history } = this.props;

    login(emailValue);
    history.push('/carteira');
  }

  render() {
    const { emailValue, passwordValue, isDisabled } = this.state;
    return (
      <main className="main-login">
        <form className="form-login">
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
            onClick={ this.handleClick }
          />
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(userLogin(state)),
});

export default connect(null, mapDispatchToProps)(Login);
