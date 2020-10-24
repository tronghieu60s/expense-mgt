import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const FormCheckAlternative = (props) => {
  const { field, text } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <div className="custom-control custom-control-alternative custom-checkbox">
      <FormControl
        className="custom-control-input"
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className="custom-control-label" htmlFor={name}>
        <span className="text-muted">{text}</span>
      </label>
    </div>
  );
};

FormCheckAlternative.propTypes = {
  text: PropTypes.string,

  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
};

FormCheckAlternative.defaultProps = {
  text: '',

  field: {
    name: '',
    value: false,
    onChange: null,
    onBlur: null,
  },
};

export default React.memo(FormCheckAlternative);
