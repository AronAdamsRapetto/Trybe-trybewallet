import React from 'react';
import PropTypes from 'prop-types';
import './styleSheet/Select.css';

class Input extends React.Component {
  render() {
    const {
      options,
      name,
      value,
      onChange,
      testId,
      id,
      labelText,
    } = this.props;
    return (
      <label htmlFor={ id } className="form-expense-select">
        { labelText }
        <select
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
          id={ id }
        >
          {
            options.map((option) => (
              <option key={ option } value={ option }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Input.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  labelText: '',
  testId: '',
};

export default Input;
