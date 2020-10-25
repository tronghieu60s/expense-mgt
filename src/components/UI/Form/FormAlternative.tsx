import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

interface Props {
  type: string;
  icon: string;
  placeholder: string;
  defaultValue: string;
  disabled: boolean;
  handleChange: any;
  field: {
    name: string;
    value: string | number;
    onChange: any;
    onBlur: any;
  };
  form: {
    errors: any;
    touched: any;
  };
}

const defaultProps: Props = {
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

const FormAlternative: React.FC<Props> = (props) => {
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
          size={!icon ? 'sm' : null}
          name={name}
          value={defaultValue || value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={type === 'number' ? '0' : placeholder}
          disabled={disabled}
          onKeyUp={() => handleChange(name, value)}
          autoComplete="off"
        />
      </div>
    </FormGroup>
  );
};

FormAlternative.defaultProps = defaultProps;

export default React.memo(FormAlternative);
