import * as TEXT from 'constant/text';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const LayoutMainJars = (props) => {
  const { jarsName, jarsColor, jarsValues, totalPercent } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        <i className="fa fa-flask" aria-hidden="true" /> {TEXT.SET_UP_JARS}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{TEXT.SET_UP_JARS}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-2">
          <div className="px-3 pt-2">
            <div className="px-5 mb-4">
              <Doughnut
                data={{
                  labels: jarsName,
                  datasets: [
                    {
                      backgroundColor: jarsColor,
                      data: jarsValues,
                    },
                  ],
                }}
                options={{
                  legend: {
                    position: 'left',
                  },
                  hover: false,
                }}
              />
            </div>
            <Formik
              initialValues={props.initialValues}
              validationSchema={props.validationSchema}
              onSubmit={props.onSubmit}
            >
              <Form>
                <div className="mb-4 px-5">
                  <div className="text-12 weight-700 text-uppercase text-right mb-2">
                    Tổng: {totalPercent || 0}%
                  </div>
                  {props.children}
                </div>
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

LayoutMainJars.propTypes = {
  children: PropTypes.array,
  jarsName: PropTypes.array,
  jarsColor: PropTypes.array,
  jarsValues: PropTypes.array,
  totalPercent: PropTypes.number,

  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

LayoutMainJars.defaultProps = {
  children: [],
  jarsName: [],
  jarsColor: [],
  jarsValues: [],
  totalPercent: 0,

  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default LayoutMainJars;
