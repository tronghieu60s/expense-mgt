import React from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import FormAlternative from 'components/UI/Form/FormAlternative';

const LayoutMainJarsItem = (props) => {
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

LayoutMainJarsItem.propTypes = {
  jar: PropTypes.shape({
    nameCode: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
  }),

  handleChange: PropTypes.func,
};

LayoutMainJarsItem.defaultProps = {
  jar: {
    nameCode: '',
    name: '',
    color: '',
  },

  handleChange: null,
};

export default LayoutMainJarsItem;
