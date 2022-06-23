import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions';
import Button from './Button';

class TableRows extends React.Component {
  handleClick = ({ target: { textContent } }, id) => {
    const { remove, edit } = this.props;

    if (textContent === 'Excluir') {
      remove(id);
    }
    if (textContent === 'Editar') {
      edit(id);
    }
  }

  render() {
    const { expense: {
      description,
      tag,
      method,
      value,
      currency,
      id,
      exchangeRates: {
        [currency]: {
          ask,
          name,
        },
      },
    } } = this.props;
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{ name }</td>
        <td>{ parseFloat(ask).toFixed(2) }</td>
        <td>{ (value * ask).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <Button
            buttonText="Editar"
            onClick={ (event) => this.handleClick(event, id) }
            testId="edit-btn"
          />
          <Button
            buttonText="Excluir"
            onClick={ (event) => this.handleClick(event, id) }
            testId="delete-btn"
          />
        </td>
      </tr>
    );
  }
}

TableRows.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.number,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeExpense(state)),
  edit: (state) => dispatch(editExpense(state)),
});

export default connect(null, mapDispatchToProps)(TableRows);
