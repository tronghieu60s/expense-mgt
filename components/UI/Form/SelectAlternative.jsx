import React from 'react';
import { FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SelectAlternative = (props) => {
  const { field, form, icon, placeholder, disabled, options } = props;
  const { name, value, onBlur, onChange } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className="mb-2">
      <p className={`mb-1 text-12 weight-600 ${showError && 'text-danger'}`}>
        {placeholder}
        {showError && ` - ${errors[name]}`}
      </p>
      <div className="input-group input-group-merge input-group-alternative">
        {icon && (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={icon} aria-hidden="true" />
            </span>
          </div>
        )}
        <select
          className={`form-control ${!icon && 'form-control-sm'}`}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        >
          {options.map((option) => {
            return (
              <option key={option.key} value={option.key}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
    </FormGroup>
  );
};

SelectAlternative.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,

  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape({}),
    touched: PropTypes.shape({}),
  }),
};

SelectAlternative.defaultProps = {
  icon: '',
  placeholder: '',
  disabled: false,
  options: [],

  field: {
    name: '',
    value: '',
    onChange: null,
    onBlur: null,
  },
  form: {
    errors: {},
    touched: {},
  },
};

export default SelectAlternative;
