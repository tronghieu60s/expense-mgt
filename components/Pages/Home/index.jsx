import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Home = (props) => {
  return (
    <Row>
      <Col md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            {props.componentBlock1}
          </Col>
          <Col md={6} lg={12}>
            {props.componentBlock2}
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={9}>
        {props.children}
      </Col>
    </Row>
  );
};

Home.propTypes = {
  children: PropTypes.element,
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
};

Home.defaultProps = {
  children: createElement('div'),
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
};

export default Home;
