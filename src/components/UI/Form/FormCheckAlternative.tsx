import React from 'react';
import { FormControl } from 'react-bootstrap';

interface Props {
  text: string;
  field: {
    name: string;
    value: boolean;
    onChange: any;
    onBlur: any;
  };
}

const FormCheckAlternative: React.FC<Props> = (props) => {
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

export default React.memo(FormCheckAlternative);
