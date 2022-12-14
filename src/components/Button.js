import React from 'react';
import PropTypes from 'prop-types';
import './styleSheet/Button.css';

class Button extends React.Component {
  render() {
    const { buttonText, onClick, disabled, testId } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ testId }
        className="button-style"
      >
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  testId: null,
};

export default Button;
