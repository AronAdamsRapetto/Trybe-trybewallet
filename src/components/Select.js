import React from 'react';
import PropTypes from 'prop-types';

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
      <label htmlFor={ id }>
        { labelText }
        <select
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
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
  testId: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  labelText: '',
};

export default Input;
