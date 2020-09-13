import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as PATH from 'constants/path';
import * as TEXT from 'constants/text';
import { Row, Col, Button } from 'react-bootstrap';

const Index = (props) => {
  return (
    <>
      <Col xs={{ order: 2 }} md={{ order: 1, span: 6 }} lg={6}>
        <Row>
          <Col md={12}>{props.componentBlock1}</Col>
          <Col md={12}>
            <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
              <span className="mb-0 text-12 weight-600 text-uppercase">
                {TEXT.REPORT_REVENUE_EXPENDITURE}
              </span>
              {props.componentBlock2}
              <Link href={PATH.REPORT_PAGE}>
                <Button className="mt-2" variant="primary" size="sm" block>
                  Xem thêm <i className="fa fa-arrow-right" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={{ order: 1 }} md={{ order: 2, span: 6 }} lg={3}>
        {props.componentBlock3}
      </Col>
    </>
  );
};

Index.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
};

Index.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
};

export default Index;
