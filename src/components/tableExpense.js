import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseForm extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table />
    );
  }
}

ExpenseForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   prop: (state) => dispatch(),
// });

export default connect(mapStateToProps)(ExpenseForm);
