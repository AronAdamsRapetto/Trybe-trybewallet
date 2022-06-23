import React from 'react';
import PropTypes from 'prop-types';

class TableRows extends React.Component {
  render() {
    const { expense } = this.props;
    console.log(expense);
    return (
      <tr>
        <td>{ }</td>
      </tr>
    );
  }
}

TableRows.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default TableRows;
