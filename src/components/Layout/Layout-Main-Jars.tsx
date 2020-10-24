import * as TEXT from 'src/constant/text';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

interface Props {
  children: any;
  jarsName: any;
  jarsColor: any;
  jarsValues: any;
  totalPercent: number;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const LayoutMainJars: React.FC<Props> = (props) => {
  const {
    jarsName,
    jarsColor,
    jarsValues,
    totalPercent,
    initialValues,
    validationSchema,
    onSubmit,
    children,
  } = props;

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
            <div className="d-none d-md-block mb-4 px-2 px-lg-5">
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
            <div className="d-md-none mb-4 px-2 px-lg-5">
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
                    display: false,
                    position: 'left',
                  },
                  hover: false,
                }}
              />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="mb-4 px-2 px-lg-5">
                  <div className="text-12 weight-700 text-uppercase text-right mb-2">
                    Tổng: {totalPercent || 0}%
                  </div>
                  {children}
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

export default LayoutMainJars;
