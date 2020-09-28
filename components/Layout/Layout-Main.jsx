import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Layout = (props) => {
  const { user, pathname, handleLogout } = props;
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
              {props.componentSetting}
              <div className="ml-1">{props.componentJars}</div>
              <Button variant="danger" size="sm" className="ml-1" onClick={handleLogout}>
                <i className="fa fa-sign-out" aria-hidden="true" /> Đăng Xuất
              </Button>
            </div>
          </Col>
        </Row>
        {props.children}
        {props.componentFooter}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  pathname: PropTypes.string,
  handleLogout: PropTypes.func,

  user: PropTypes.shape({
    display_name: PropTypes.string,
  }),

  children: PropTypes.element,
  componentFooter: PropTypes.element,
  componentSetting: PropTypes.element,
  componentJars: PropTypes.element,
};

Layout.defaultProps = {
  pathname: '',
  handleLogout: null,

  user: {
    display_name: '',
  },

  children: createElement('div'),
  componentFooter: createElement('div'),
  componentSetting: createElement('div'),
  componentJars: createElement('div'),
};

export default Layout;
