import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const FormAlternative = (props) => {
  const { field, form, type, icon, placeholder, disabled, defaultValue, handleChange } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className="mb-2">
      <p className={`mb-1 text-12 weight-600 ${showError && 'text-danger'}`}>
        {`${placeholder}${placeholder.length !== 0 && showError ? ' - ' : ''}`}
        {showError && errors[name]}
      </p>
      <div className="input-group input-group-merge input-group-alternative">
        {icon && (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={icon} aria-hidden="true" />
            </span>
          </div>
        )}
        <FormControl
          size={!icon && 'sm'}
          name={name}
          value={defaultValue || value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={type === 'number' ? 0 : placeholder}
          disabled={disabled}
          onKeyUp={() => handleChange(name, value)}
          autoComplete="off"
        />
      </div>
    </FormGroup>
  );
};

FormAlternative.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,

  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape({}),
    touched: PropTypes.shape({}),
  }),
};

FormAlternative.defaultProps = {
  type: '',
  icon: '',
  placeholder: '',
  defaultValue: '',
  disabled: false,
  handleChange: () => {},

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

export default React.memo(FormAlternative);
