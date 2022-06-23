import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { paymentMethods, expenseTags } from '../data';
import { fetchExpense, saveEditExpense } from '../actions';

class ExpenseForm extends React.Component {
  state = {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
    isDisable: true,
    id: 0,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validateForm);
  }

  validateForm = () => {
    const state = Object.values(this.state);
    const validade = state.every((key) => key !== '');

    if (validade) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  handleClick = () => {
    const { saveExpense, isEditing, saveEdited } = this.props;
    const { id } = this.state;
    const newState = { ...this.state };
    if (isEditing) {
      delete newState.id;
      delete newState.isDisable;
      saveEdited(newState);
    } else {
      delete newState.isDisable;
      saveExpense(newState);
      this.setState({ id: id + 1 });
    }
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      isDisable: true,
    });
  }

  render() {
    const { currencies, isEditing } = this.props;
    const { value, description, currency, method, tag, isDisable } = this.state;
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
          buttonText={ isEditing ? 'Editar despesa' : 'Adicionar despesa' }
          onClick={ this.handleClick }
          disabled={ isDisable }
        />
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
  saveEdited: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

ExpenseForm.defaultProps = {
  isEditing: false,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.editor,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (state) => dispatch(fetchExpense(state)),
  saveEdited: (state) => dispatch(saveEditExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
