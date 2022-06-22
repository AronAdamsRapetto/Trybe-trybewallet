import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyApi } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;

    fetchCurrency();
  }

  render() {
    return (
      <main>
        <Header />
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
