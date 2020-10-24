import FormAlternative from 'src/components/UI/Form/FormAlternative';
import FormCheckAlternative from 'src/components/UI/Form/FormCheckAlternative';
import SelectAlternative from 'src/components/UI/Form/SelectAlternative';
import * as TEXT from 'src/constant/text';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { formatMoneyLocal } from 'src/helpers/money';

interface Props {
  tab: string;
  setTab: any;
  totalIncome: number;
  totalExpense: number;
  optionsJars: any;
  optionsGroups: any;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const HomeBalancesModal: React.FC<Props> = (props) => {
  const {
    tab,
    setTab,
    totalIncome,
    totalExpense,
    optionsJars,
    optionsGroups,
    initialValues,
    validationSchema,
    onSubmit,
  } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-around">
      <Button
        variant="primary"
        size="sm"
        block
        onClick={() => {
          setTab('income');
          handleShow();
        }}
      >
        <div className="text-11">
          <i className="fa fa-plus-circle" aria-hidden="true" /> {TEXT.INCOME}
        </div>
        <span className="mb-0">
          {formatMoneyLocal(totalIncome)} <u>đ</u>
        </span>
      </Button>
      <Button
        className="mt-0"
        variant="danger"
        size="sm"
        block
        onClick={() => {
          setTab('expense');
          handleShow();
        }}
      >
        <div className="text-11">
          <i className="fa fa-minus-circle" aria-hidden="true" /> {TEXT.EXPENSE}
        </div>
        <span className="mb-0">
          {formatMoneyLocal(totalExpense)} <u>đ</u>
        </span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{TEXT.ADD_TRANSACTION}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Row>
                <Col xs={4}>
                  <Button
                    variant={tab === 'income' ? 'primary' : 'outline-dark'}
                    size="sm"
                    block
                    onClick={() => props.setTab('income')}
                  >
                    Thu Nhập
                  </Button>
                  <Button
                    variant={tab === 'expense' ? 'primary' : 'outline-dark'}
                    size="sm"
                    block
                    onClick={() => props.setTab('expense')}
                  >
                    Chi Tiêu
                  </Button>
                  <Button
                    variant={tab === 'move-money' ? 'primary' : 'outline-dark'}
                    size="sm"
                    block
                    onClick={() => props.setTab('move-money')}
                  >
                    Chuyển Hũ
                  </Button>
                </Col>
                <Col xs={8}>
                  {tab === 'move-money' && (
                    <>
                      <FastField
                        name="transfer"
                        component={SelectAlternative}
                        icon="fa fa-flask"
                        placeholder={TEXT.FORM_TRANSFER}
                        options={optionsJars}
                      />
                      <FastField
                        name="receive"
                        component={SelectAlternative}
                        icon="fa fa-flask"
                        placeholder={TEXT.FORM_RECEIVE}
                        options={optionsJars}
                      />
                    </>
                  )}
                  <FastField
                    name="money"
                    component={FormAlternative}
                    type="number"
                    icon="fa fa-money"
                    placeholder={TEXT.FORM_MONEY}
                  />
                  {tab === 'expense' && (
                    <>
                      <FastField
                        name="jar"
                        component={SelectAlternative}
                        icon="fa fa-flask"
                        placeholder={TEXT.FORM_JAR}
                        options={optionsJars}
                      />
                      <FastField
                        name="group"
                        component={SelectAlternative}
                        icon="fa fa-cutlery"
                        placeholder={TEXT.FORM_GROUP}
                        options={optionsGroups}
                      />
                    </>
                  )}
                  {tab !== 'move-money' && (
                    <>
                      <FastField
                        name="date"
                        component={FormAlternative}
                        type="date"
                        icon="fa fa-calendar-o"
                        placeholder={TEXT.FORM_DATE}
                      />
                      <FastField
                        name="description"
                        component={FormAlternative}
                        type="text"
                        icon="fa fa-pencil"
                        placeholder={`${TEXT.FORM_DESCRIPTION}...`}
                      />
                    </>
                  )}
                  {tab === 'income' && (
                    <div className="d-flex text-13">
                      <FastField
                        name="no_glass"
                        component={FormCheckAlternative}
                        text={TEXT.FORM_NO_GLASS}
                      />
                    </div>
                  )}
                </Col>
              </Row>
              <div className="d-flex justify-content-end w-100 mt-3">
                <div>
                  <Button variant="secondary" onClick={handleClose}>
                    {TEXT.CANCEL}
                  </Button>
                  <Button type="submit" variant="primary">
                    {TEXT.SAVE}
                  </Button>
                </div>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomeBalancesModal;
