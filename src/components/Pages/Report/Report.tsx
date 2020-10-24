import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlock from 'src/components/UI/Block/Main-Block';
import * as TEXT from 'src/constant/text';

interface Props {
  componentBlock1: JSX.Element;
  componentBlock2: JSX.Element;
  componentBlock3: JSX.Element;
  componentBlock4: JSX.Element;
  componentBlock5: JSX.Element;
}

const Report: React.FC<Props> = (props) => {
  const {
    componentBlock1,
    componentBlock2,
    componentBlock3,
    componentBlock4,
    componentBlock5,
  } = props;
  return (
    <Row>
      <Col className="d-none d-lg-block pr-lg-1" md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            <MainBlock>{componentBlock1}</MainBlock>
          </Col>
          <Col md={6} lg={12}>
            <MainBlock title={TEXT.BACKUPS_DATA}>{componentBlock2}</MainBlock>
          </Col>
        </Row>
      </Col>
      <Col className="pl-lg-1" md={12} lg={9}>
        <MainBlock title={TEXT.REPORT_REVENUE_EXPENDITURE}>
          <Row className="px-4 mt-2">
            <Col md={12}>
              <Row className="mb-4">
                <Col md={6} className="d-flex align-items-center">
                  {componentBlock3}
                </Col>
                <Col md={6} className="d-none d-md-block">
                  {componentBlock4}
                </Col>
              </Row>
            </Col>
            <Col md={12}>{componentBlock5}</Col>
          </Row>
        </MainBlock>
      </Col>
    </Row>
  );
};

export default Report;
