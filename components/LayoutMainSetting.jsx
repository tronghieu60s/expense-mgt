import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormAlternative2Col from 'components/UI/Form/FormAlternative2Col';
import { FastField, Form } from 'formik';
import * as TEXT from 'constant/text';

const LayoutMainSetting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mr-0" variant="primary" size="sm" onClick={handleShow}>
        <i className="fa fa-user" aria-hidden="true" /> Cài Đặt
      </Button>
      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cài Đặt</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-2">
          <div className="px-3 pt-2">
            <Form>
              <div className="mb-0 text-14 weight-800 text-uppercase mb-3">Cài đặt tài khoản</div>
              <FastField
                name="username"
                component={FormAlternative2Col}
                type="text"
                title={TEXT.FORM_USERNAME}
              />
              <FastField
                name="email"
                component={FormAlternative2Col}
                type="text"
                title={TEXT.FORM_EMAIL}
              />
              <FastField
                name="old-password"
                component={FormAlternative2Col}
                type="text"
                title={TEXT.FORM_OLD_PASSWORD}
              />
              <FastField
                name="new-password"
                component={FormAlternative2Col}
                type="text"
                title={TEXT.FORM_NEW_PASSWORD}
              />
              <FastField
                name="renew-password"
                component={FormAlternative2Col}
                type="text"
                title={TEXT.FORM_RENEW_PASSWORD}
              />
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button type="submit" variant="primary">
                Lưu
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

LayoutMainSetting.propTypes = {};

export default LayoutMainSetting;
