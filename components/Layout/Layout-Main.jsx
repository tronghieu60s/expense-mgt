import * as PATH from 'constant/path';
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
          <Col xs={6} md={3}>
            <div className="expense-main-head">
              <h4 className="mb-0">Xin chào {display_name}!</h4>
              <span className="text-13">Hôm nay bạn có gì mới không?</span>
            </div>
          </Col>
          <Col xs={6} md={6} className="mt-2 mt-md-0 d-flex align-items-center">
            <Navbar className="p-0 text-14 ml-auto ml-md-0" expand="sm">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link href={PATH.HOME_PAGE}>
                    <Nav.Link href={PATH.HOME_PAGE} active={pathname === PATH.HOME_PAGE}>
                      Trang chủ
                    </Nav.Link>
                  </Link>
                  <Link href={PATH.HISTORY_PAGE}>
                    <Nav.Link href={PATH.HISTORY_PAGE} active={pathname === PATH.HISTORY_PAGE}>
                      Lịch sử giao dịch
                    </Nav.Link>
                  </Link>
                  <Link href={PATH.REPORT_PAGE}>
                    <Nav.Link href={PATH.REPORT_PAGE} active={pathname === PATH.REPORT_PAGE}>
                      Báo Cáo Thu Chi
                    </Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={3} className="mt-2 mt-md-0 text-left text-md-right">
            <div className="d-flex justify-content-end">
              {props.componentSetting}
              <div className="ml-1">{props.componentJars}</div>
            </div>
            <div className="mt-1">
              <Button variant="danger" size="sm" className="mt-0" onClick={handleLogout}>
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
