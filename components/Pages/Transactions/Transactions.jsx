import MainBlock from 'components/UI/Block/Main-Block';
import * as TEXT from 'constant/text';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';

const Transactions = (props) => {
  return (
    <Row>
      <Col className="pr-lg-1" md={12} lg={3}>
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
        <MainBlock title={TEXT.TRANSACTIONS_HISTORY}>
          <Row className="px-md-4 mt-3">
            <Col xs={12}>{props.componentBlock3}</Col>
            <Col className="mt-2" xs={12}>
              {props.componentBlock4}
            </Col>
          </Row>
        </MainBlock>
      </Col>
    </Row>
  );
};

Transactions.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
  componentBlock4: PropTypes.element,
};

Transactions.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
  componentBlock4: createElement('div'),
};

export default Transactions;
