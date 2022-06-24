import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tableHeaders } from '../data';
import TableRows from './TableRows';
import './styleSheet/TableExpense.css';

class TableExpense extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table-container">
        <thead>
          <tr>
            {
              tableHeaders.map((header) => (
                <th key={ header }>{ header }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <TableRows
                key={ expense.id }
                expense={ expense }
              />
            ))
          }
        </tbody>
      </table>
    );
  }
}

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpense);
