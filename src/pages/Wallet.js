import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyApi } from '../actions';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import TableExpense from '../components/tableExpense';
import './styleSheet/Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    return (
      <main className="main-wallet">
        <Header />
        <ExpenseForm />
        <TableExpense />
      </main>
    );
  }
}

Wallet.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyApi()),
});

export default connect(null, mapDispatchToProps)(Wallet);
