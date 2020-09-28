import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlock from 'components/UI/Block/Main-Block';

const Home = (props) => {
  return (
    <Row>
      <Col className="pr-lg-1" md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            <MainBlock>{props.componentBlock1}</MainBlock>
          </Col>
          <Col className="d-none d-md-block" md={6} lg={12}>
            <MainBlock title={TEXT.BACKUPS_DATA}>{props.componentBlock2}</MainBlock>
          </Col>
        </Row>
      </Col>
      <Col className="pl-lg-1" md={12} lg={9}>
        <MainBlock>{props.componentBlock3}</MainBlock>
        <Row>
          <Col className="pr-lg-1 order-2 order-lg-1" md={6} lg={8}>
            <MainBlock title={TEXT.REPORT_REVENUE_EXPENDITURE}>
              {props.componentBlock4}
              <Link href={PATH.REPORT_PAGE}>
                <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                  {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </Link>
            </MainBlock>
          </Col>
          <Col className="pl-lg-1 order-1 order-lg-2" md={6} lg={4}>
            <MainBlock title={TEXT.NEW_TRANSACTION}>
              {props.componentBlock5}
              <Link href={PATH.HISTORY_PAGE}>
                <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                  {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </Link>
            </MainBlock>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Home.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
  componentBlock4: PropTypes.element,
  componentBlock5: PropTypes.element,
};

Home.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
  componentBlock4: createElement('div'),
  componentBlock5: createElement('div'),
};

export default Home;
