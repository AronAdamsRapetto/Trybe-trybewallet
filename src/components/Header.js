import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styleSheet/Header.css';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header className="header-container">
        <h1>TrybeWallet</h1>
        <div className="user-container">
          <p data-testid="email-field">{ userEmail }</p>
          <div>
            <span data-testid="total-field">
              {
                expenses.map(({ currency, value, exchangeRates }) => (
                  value * exchangeRates[currency].ask
                )).reduce((accValue, value) => accValue + value, 0).toFixed(2)
              }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
