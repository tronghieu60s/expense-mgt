import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const FormAlternative = (props) => {
  const { field, form, type, icon, placeholder } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup className="mb-3">
      <div className="input-group input-group-merge input-group-alternative">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} aria-hidden="true" />
          </span>
        </div>
        <FormControl
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </FormGroup>
  );
};

FormAlternative.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,

  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
};

FormAlternative.defaultProps = {
  field: {
    name: '',
    value: '',
    onChange: null,
    onBlur: null,
  },
};

export default FormAlternative;
