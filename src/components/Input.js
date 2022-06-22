import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, value, onChange, name, placeholder, testId } = this.props;
    return (
      <input
        type={ type }
        placeholder={ placeholder }
        value={ value }
        name={ name }
        onChange={ onChange }
        data-testid={ testId }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
