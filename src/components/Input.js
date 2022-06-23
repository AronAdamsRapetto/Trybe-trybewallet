import React from 'react';
import PropTypes from 'prop-types';
import './styleSheet/Input.css';

class Input extends React.Component {
  render() {
    const {
      type,
      value,
      onChange,
      name,
      placeholder,
      testId,
      id,
      labelText,
    } = this.props;
    return (
      <label
        htmlFor={ id }
        className={ labelText === '' ? 'input-whithout-label' : 'input-whith-label' }
      >
        { labelText }
        <input
          type={ type }
          placeholder={ placeholder }
          value={ value }
          name={ name }
          onChange={ onChange }
          data-testid={ testId }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
};

Input.defaultProps = {
  id: null,
  labelText: '',
  placeholder: '',
};

export default Input;
