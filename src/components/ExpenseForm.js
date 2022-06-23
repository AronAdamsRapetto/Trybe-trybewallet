import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { paymentMethods, expenseTags } from '../data';
import { fetchExpense } from '../actions';

class ExpenseForm extends React.Component {
  state = {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { saveExpense } = this.props;
    saveExpense(this.state);

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          type="number"
          placeholder="2300,00"
          name="value"
          value={ value }
          onChange={ this.handleChange }
          testId="value-input"
          id="inputValue"
          labelText="Valor:"
        />
        <Input
          type="text"
          placeholder="Iphone"
          name="description"
          value={ description }
          onChange={ this.handleChange }
          testId="description-input"
          id="inputDescription"
          labelText="Descrição:"
        />
        <Select
          options={ currencies }
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          id="selectCurrency"
          labelText="moeda"
        />
        <Select
          options={ paymentMethods }
          name="method"
          value={ method }
          onChange={ this.handleChange }
          id="selectMethod"
          labelText="Método de pagamento"
          testId="method-input"
        />
        <Select
          options={ expenseTags }
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          id="selectTag"
          labelText="Categoria"
          testId="tag-input"
        />
        <Button
          buttonText="Adicionar despesa"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (state) => dispatch(fetchExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
