import React from 'react';
import { FormGroup } from 'react-bootstrap';

interface Props {
  icon: string;
  placeholder: string;
  disabled: boolean;
  options: any;

  field: {
    name: string;
    value: string;
    onChange: any;
    onBlur: any;
  };
  form: {
    errors: any;
    touched: any;
  };
}

const SelectAlternative: React.FC<Props> = (props) => {
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

export default SelectAlternative;
