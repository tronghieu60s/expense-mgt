import FormAlternative from 'src/components/UI/Form/FormAlternative';
import * as TEXT from 'src/constant/text';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

interface Props {
  user: {
    username: string;
    email: string;
    display_name: string;
  };
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const LayoutMainSetting: React.FC<Props> = (props) => {
  const { user, initialValues, validationSchema, onSubmit } = props;
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
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
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

export default LayoutMainSetting;
