import PropTypes from 'prop-types';
import React, { createElement } from 'react';

const Index = (props) => {
  return (
    <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
      {props.componentBlock1}
    </div>
  );
};

Index.propTypes = {
  componentBlock1: PropTypes.element,
};

Index.defaultProps = {
  componentBlock1: createElement('div'),
};

export default Index;
