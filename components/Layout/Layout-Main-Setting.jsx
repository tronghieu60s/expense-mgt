import FormAlternative from 'components/UI/Form/FormAlternative';
import * as TEXT from 'constant/text';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

const LayoutMainSetting = (props) => {
  const { user } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mr-0" variant="primary" size="sm" onClick={handleShow}>
        <i className="fa fa-user" aria-hidden="true" /> {TEXT.SETTING}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{TEXT.SETTING}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-2">
          <div className="px-3 pt-2">
            <Formik
              initialValues={props.initialValues}
              validationSchema={props.validationSchema}
              onSubmit={props.onSubmit}
            >
              <Form>
                <Row>
                  <Col xs={6}>
                    <div className="mb-0 text-13 weight-800 text-uppercase mb-2">
                      {TEXT.PERSONAL_INFORMATION}
                    </div>
                    <FastField
                      name="none"
                      component={FormAlternative}
                      type="text"
                      defaultValue={user.username}
                      placeholder={TEXT.FORM_USERNAME}
                      disabled
                    />
                    <FastField
                      name="none"
                      component={FormAlternative}
                      type="email"
                      defaultValue={user.email}
                      placeholder={TEXT.FORM_EMAIL}
                      disabled
                    />
                    <FastField
                      name="display_name"
                      component={FormAlternative}
                      type="text"
                      placeholder={TEXT.FORM_DISPLAYNAME}
                    />
                  </Col>
                  <Col xs={6}>
                    <div className="mb-0 text-13 weight-800 text-uppercase mb-2">
                      {TEXT.CHANGE_PASSWORD}
                    </div>
                    <FastField
                      name="old_password"
                      component={FormAlternative}
                      type="password"
                      placeholder={TEXT.FORM_OLD_PASSWORD}
                    />
                    <FastField
                      name="new_password"
                      component={FormAlternative}
                      type="password"
                      placeholder={TEXT.FORM_NEW_PASSWORD}
                    />
                    <FastField
                      name="renew_password"
                      component={FormAlternative}
                      type="password"
                      placeholder={TEXT.FORM_RENEW_PASSWORD}
                    />
                  </Col>
                </Row>
                <div className="my-3 d-flex justify-content-end">
                  <Button variant="secondary" onClick={handleClose}>
                    {TEXT.CANCEL}
                  </Button>
                  <Button type="submit" variant="primary">
                    {TEXT.SAVE}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

LayoutMainSetting.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    display_name: PropTypes.string,
  }),

  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

LayoutMainSetting.defaultProps = {
  user: {
    username: '',
    email: '',
    display_name: '',
  },

  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default LayoutMainSetting;
