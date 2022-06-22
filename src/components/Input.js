import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, value, onChange, name, placeholder } = this.props;
    return (
      <input
        type={ type }
        placeholder={ placeholder }
        value={ value }
        name={ name }
        onChange={ onChange }
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
};

export default Input;
