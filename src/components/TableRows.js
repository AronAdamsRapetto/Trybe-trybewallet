import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class TableRows extends React.Component {
  handleClick = ({ target: { textContent } }) => {
    console.log(textContent);
  }

  render() {
    const { expense: {
      description,
      tag,
      method,
      value,
      currency,
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
          <Button buttonText="Excluír" onClick={ this.handleClick } />
          <Button buttonText="Editar" onClick={ this.handleClick } />
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
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default TableRows;
