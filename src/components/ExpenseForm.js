import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
// import Button from './Button';
import { paymentMethods, expenseTags } from '../data';

class ExpenseForm extends React.Component {
  state = {
    price: '',
    description: '',
    currency: '',
    paymentMethod: '',
    expenseTag: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { price, description, currency, paymentMethod, expenseTag } = this.state;
    return (
      <form>
        <Input
          type="number"
          placeholder="2300,00"
          name="price"
          value={ price }
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
          name="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleChange }
          id="selectMethod"
          labelText="Método de pagamento"
          testId="method-input"
        />
        <Select
          options={ expenseTags }
          name="expenseTag"
          value={ expenseTag }
          onChange={ this.handleChange }
          id="selectTag"
          labelText="Categoria"
          testId="tag-input"
        />
        {/* <Button
          buttonText="Adicionar despesa"
          onClick={  }
        /> */}
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);
