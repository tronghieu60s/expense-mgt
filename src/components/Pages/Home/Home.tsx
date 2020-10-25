import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlock from 'src/components/UI/Block/Main-Block';
import * as PATH from 'src/constant/path';
import * as TEXT from 'src/constant/text';

interface Props {
  componentBlock1: JSX.Element;
  componentBlock2: JSX.Element;
  componentBlock3: JSX.Element;
  componentBlock4: JSX.Element;
  componentBlock5: JSX.Element;
}

const Home: React.FC<Props> = (props) => {
  const {
    componentBlock1,
    componentBlock2,
    componentBlock3,
    componentBlock4,
    componentBlock5,
  } = props;

  return (
    <Row>
      <Col className="pr-lg-1" md={12} lg={3}>
        <Row>
          <Col md={6} lg={12}>
            <MainBlock>{componentBlock1}</MainBlock>
          </Col>
          <Col className="d-none d-md-block" md={6} lg={12}>
            <MainBlock title={TEXT.BACKUPS_DATA}>{componentBlock2}</MainBlock>
          </Col>
        </Row>
      </Col>
      <Col className="pl-lg-1" md={12} lg={9}>
        <MainBlock>{componentBlock3}</MainBlock>
        <Row>
          <Col className="pr-lg-1 order-2 order-lg-1" md={6} lg={8}>
            <MainBlock title={TEXT.REPORT_REVENUE_EXPENDITURE}>
              <>
                {componentBlock4}
                <Link href={PATH.REPORT_PAGE}>
                  <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                    {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
                  </button>
                </Link>
              </>
            </MainBlock>
          </Col>
          <Col className="pl-lg-1 order-1 order-lg-2" md={6} lg={4}>
            <MainBlock title={TEXT.NEW_TRANSACTION}>
              <>
                {componentBlock5}
                <Link href={PATH.HISTORY_PAGE}>
                  <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                    {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
                  </button>
                </Link>
              </>
            </MainBlock>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
