import React from 'react';
import { FastField } from 'formik';
import FormAlternative from 'src/components/UI/Form/FormAlternative';

interface Props {
  jar: {
    nameCode: string;
    name: string;
    color: string;
  };
  handleChange: any;
}

const LayoutMainJarsItem: React.FC<Props> = (props) => {
  const { jar, handleChange } = props;

  return (
    <div className="form-group mb-0 d-flex justify-content-between align-items-center">
      <div className="mb-0 text-12 weight-600 text-uppercase" style={{ color: jar.color }}>
        {jar.name}:
      </div>
      <FastField
        name={jar.nameCode}
        component={FormAlternative}
        type="number"
        handleChange={handleChange}
      />
    </div>
  );
};

export default LayoutMainJarsItem;
