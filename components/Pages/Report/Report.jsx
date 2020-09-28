import MainBlock from 'components/UI/Block/Main-Block';
import * as TEXT from 'constant/text';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';

const Report = (props) => {
  return (
    <Row>
      <Col className="d-none d-lg-block pr-lg-1" md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            <MainBlock>{props.componentBlock1}</MainBlock>
          </Col>
          <Col md={6} lg={12}>
            <MainBlock title={TEXT.BACKUPS_DATA}>{props.componentBlock2}</MainBlock>
          </Col>
        </Row>
      </Col>
      <Col className="pl-lg-1" md={12} lg={9}>
        <MainBlock title={TEXT.REPORT_REVENUE_EXPENDITURE}>
          <Row className="px-4 mt-2">
            <Col md={12}>
              <Row className="mb-4">
                <Col md={6} className="d-flex align-items-center">
                  {props.componentBlock3}
                </Col>
                <Col md={6} className="d-none d-md-block">
                  {props.componentBlock4}
                </Col>
              </Row>
            </Col>
            <Col md={12}>{props.componentBlock5}</Col>
          </Row>
        </MainBlock>
      </Col>
    </Row>
  );
};

Report.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
  componentBlock4: PropTypes.element,
  componentBlock5: PropTypes.element,
};

Report.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
  componentBlock4: createElement('div'),
  componentBlock5: createElement('div'),
};

export default Report;
