import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlock from 'src/components/UI/Block/Main-Block';
import * as TEXT from 'src/constant/text';

interface Props {
  componentBlock1: JSX.Element;
  componentBlock2: JSX.Element;
  componentBlock3: JSX.Element;
  componentBlock4: JSX.Element;
}

const Transactions: React.FC<Props> = (props) => {
  const { componentBlock1, componentBlock2, componentBlock3, componentBlock4 } = props;

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
        <MainBlock title={TEXT.TRANSACTIONS_HISTORY}>
          <Row className="px-md-4 mt-3">
            <Col xs={12}>{componentBlock3}</Col>
            <Col className="mt-2" xs={12}>
              {componentBlock4}
            </Col>
          </Row>
        </MainBlock>
      </Col>
    </Row>
  );
};

export default Transactions;
