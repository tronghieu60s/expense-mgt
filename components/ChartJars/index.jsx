import PropTypes from 'prop-types';
import React from 'react';
import { Row } from 'react-bootstrap';

const ChartJars = (props) => {
  return <Row>{props.children}</Row>;
};

ChartJars.propTypes = {
  children: PropTypes.array,
};

ChartJars.defaultProps = {
  children: [],
};

export default ChartJars;
