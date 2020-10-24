import Link from 'next/link';
import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import * as PATH from 'src/constant/path';
import * as TEXT from 'src/constant/text';

interface Props {
  pathname: string;
  handleLogout: any;
  user: {
    display_name: string;
  };
  children: JSX.Element;
  componentFooter: JSX.Element;
  componentSetting: JSX.Element;
  componentJars: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  const {
    user,
    pathname,
    handleLogout,
    componentSetting,
    componentJars,
    children,
    componentFooter,
  } = props;
  const { display_name } = user;

  return (
    <div className="expense-main py-3">
      <Container fluid>
        <Row>
          <Col xs={6} md={3} className="order-2 order-md-1">
            <div className="expense-main-head">
              <h4 className="mb-0">Xin chào {display_name}!</h4>
              <span className="text-13">Hôm nay bạn có gì mới không?</span>
            </div>
          </Col>
          <Col xs={6} md={5} className="mt-0 order-1 order-md-2">
            <Navbar className="p-0 text-14 ml-auto ml-md-0" expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link href={PATH.HOME_PAGE}>
                    <Nav.Link href={PATH.HOME_PAGE} active={pathname === PATH.HOME_PAGE}>
                      {TEXT.HOME}
                    </Nav.Link>
                  </Link>
                  <Link href={PATH.HISTORY_PAGE}>
                    <Nav.Link href={PATH.HISTORY_PAGE} active={pathname === PATH.HISTORY_PAGE}>
                      {TEXT.TRANSACTIONS_HISTORY}
                    </Nav.Link>
                  </Link>
                  <Link href={PATH.REPORT_PAGE}>
                    <Nav.Link href={PATH.REPORT_PAGE} active={pathname === PATH.REPORT_PAGE}>
                      {TEXT.REPORT_REVENUE_EXPENDITURE}
                    </Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={4} className="mt-2 order-3">
            <div className="d-flex justify-content-start justify-content-lg-end">
              {componentSetting}
              <div className="ml-1">{componentJars}</div>
              <Button variant="danger" size="sm" className="ml-1" onClick={handleLogout}>
                <i className="fa fa-sign-out" aria-hidden="true" /> Đăng Xuất
              </Button>
            </div>
          </Col>
        </Row>
        {children}
        {componentFooter}
      </Container>
    </div>
  );
};

export default Layout;
