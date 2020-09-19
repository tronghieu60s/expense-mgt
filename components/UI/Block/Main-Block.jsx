import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const MainBlock = (props) => {
  const { title } = props;

  return (
    <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
      {title && <div className="mb-0 text-12 weight-600 text-uppercase mt-1 mb-3">{title}</div>}
      {props.children}
    </div>
  );
};

MainBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

MainBlock.defaultProps = {
  title: '',
  children: createElement('div'),
};

export default MainBlock;
