import FormAlternative from 'components/UI/Form/FormAlternative';
import SelectAlternative from 'components/UI/Form/SelectAlternative';
import * as TEXT from 'constant/text';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, FormGroup, Row } from 'react-bootstrap';

const ReportSort = (props) => {
  const { optionsSortMonth, optionsSortYear, tabSort, setTabSort } = props;

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      <Form>
        <Row>
          <Col sm={5}>
            <FormGroup className="mb-2">
              <p className="mb-1 text-12 weight-600">{TEXT.SORT_BY_TIME}</p>
              <div className="input-group input-group-merge input-group-alternative">
                <select
                  className="form-control form-control-sm"
                  value={tabSort}
                  onChange={setTabSort}
                >
                  <option value="day">{TEXT.DAY}</option>
                  <option value="month">{TEXT.MONTH}</option>
                  <option value="year">{TEXT.YEAR}</option>
                </select>
              </div>
            </FormGroup>
          </Col>
          <Col className="d-flex" sm={12}>
            <div style={{ width: '100px' }}>
              <FastField
                name="show"
                component={FormAlternative}
                type="number"
                placeholder={TEXT.SORT_BY_NUMBER}
              />
            </div>
            {tabSort === 'day' && (
              <div className="ml-1">
                <FastField
                  name="date"
                  component={FormAlternative}
                  type="date"
                  placeholder={TEXT.SORT_BY_FROM_DATE}
                />
              </div>
            )}
            {tabSort === 'month' && (
              <div className="ml-1">
                <FastField
                  name="month"
                  component={SelectAlternative}
                  placeholder={TEXT.SORT_BY_MONTH}
                  options={optionsSortMonth}
                />
              </div>
            )}
            {(tabSort === 'month' || tabSort === 'year') && (
              <div className="ml-1">
                <FastField
                  name="year"
                  component={SelectAlternative}
                  placeholder={TEXT.SORT_BY_YEAR}
                  options={optionsSortYear}
                />
              </div>
            )}
          </Col>
        </Row>
        <Button type="submit" variant="primary" size="sm">
          Lọc
        </Button>
      </Form>
    </Formik>
  );
};

ReportSort.propTypes = {
  optionsSortMonth: PropTypes.array,
  optionsSortYear: PropTypes.array,

  tabSort: PropTypes.string,
  setTabSort: PropTypes.func,
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

ReportSort.defaultProps = {
  optionsSortMonth: [],
  optionsSortYear: [],

  tabSort: '',
  setTabSort: null,
  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default ReportSort;
