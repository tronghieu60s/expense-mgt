import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlock from 'components/UI/Block/Main-Block';

const Index = (props) => {
  return (
    <Row>
      <Col md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            <MainBlock>{props.componentBlock1}</MainBlock>
          </Col>
          <Col md={6} lg={12}>
            <MainBlock title={TEXT.NEW_TRANSACTION}>{props.componentBlock2}</MainBlock>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={9}>
        <MainBlock>{props.componentBlock3}</MainBlock>
        <Row>
          <Col md={6} lg={8}>
            <MainBlock title={TEXT.REPORT_REVENUE_EXPENDITURE}>
              {props.componentBlock4}
              <Link href={PATH.HISTORY_PAGE}>
                <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                  {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </Link>
            </MainBlock>
          </Col>
          <Col md={6} lg={4}>
            <MainBlock title={TEXT.NEW_TRANSACTION}>{props.componentBlock5}</MainBlock>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Index.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
  componentBlock4: PropTypes.element,
  componentBlock5: PropTypes.element,
};

Index.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
  componentBlock4: createElement('div'),
  componentBlock5: createElement('div'),
};

export default Index;
