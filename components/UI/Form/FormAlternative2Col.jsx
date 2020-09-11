import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const FormAlternative2Col = (props) => {
  const { field, form, type, title, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className="mb-3 d-flex justify-content-between align-items-center mt-3">
      {showError && (
        <p className="mb-1 text-12 text-danger weight-600">
          {title} - {errors[name]}
        </p>
      )}
      <div className="mb-0 text-12 weight-600 text-uppercase">{title}:</div>
      <div className="input-group input-group-merge input-group-alternative">
        <FormControl
          size="sm"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          autoComplete="off"
          disabled={disabled}
        />
      </div>
    </FormGroup>
  );
};

FormAlternative2Col.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,

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

FormAlternative2Col.defaultProps = {
  type: '',
  title: '',
  placeholder: '',
  disabled: false,

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

export default React.memo(FormAlternative2Col);
