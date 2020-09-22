import FormAlternative from 'components/UI/Form/FormAlternative';
import SelectAlternative from 'components/UI/Form/SelectAlternative';
import * as TEXT from 'constant/text';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const ReportSort = (props) => {
  const { optionSortMonth, optionsSortYear, optionsSortJars, tabSort, setTabSort } = props;

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      <Form>
        <Row className="mb-2">
          <Col sm={12}>
            <p className="mb-1 text-12 weight-600">{TEXT.FILTER_BY_TIME}</p>
            <div className="d-flex mb-3">
              <Button
                variant={tabSort === 'day' ? 'primary' : 'outline-dark'}
                size="sm"
                onClick={() => setTabSort('day')}
              >
                {TEXT.DAY}
              </Button>
              <Button
                variant={tabSort === 'month' ? 'primary' : 'outline-dark'}
                size="sm"
                onClick={() => setTabSort('month')}
              >
                {TEXT.MONTH}
              </Button>
              <Button
                variant={tabSort === 'year' ? 'primary' : 'outline-dark'}
                size="sm"
                onClick={() => setTabSort('year')}
              >
                {TEXT.YEAR}
              </Button>
            </div>
            <div style={{ width: '150px' }}>
              <FastField
                name="jar"
                component={SelectAlternative}
                placeholder={TEXT.FILTER_BY_JARS}
                options={optionsSortJars}
              />
            </div>
          </Col>
          <Col sm={12} className="d-flex">
            <div style={{ width: '100px' }}>
              <FastField
                name="show"
                component={FormAlternative}
                type="number"
                placeholder={TEXT.FILTER_BY_NUMBER}
              />
            </div>
            {tabSort === 'day' && (
              <div className="ml-1">
                <FastField
                  name="date"
                  component={FormAlternative}
                  type="date"
                  placeholder={TEXT.FILTER_BY_FROM_DATE}
                />
              </div>
            )}
            {tabSort === 'month' && (
              <div className="ml-1" style={{ width: '85px' }}>
                <FastField
                  name="fromMonth"
                  component={SelectAlternative}
                  placeholder={TEXT.FILTER_BY_FROM_MONTH}
                  options={optionSortMonth}
                />
              </div>
            )}
            {tabSort === 'month' && (
              <div className="ml-1">
                <FastField
                  name="year"
                  component={SelectAlternative}
                  placeholder={TEXT.FILTER_BY_YEAR}
                  options={optionsSortYear}
                />
              </div>
            )}
          </Col>
        </Row>
        <Button type="submit" variant="primary" size="sm">
          {TEXT.FILTER}
        </Button>
      </Form>
    </Formik>
  );
};

ReportSort.propTypes = {
  optionSortMonth: PropTypes.array,
  optionsSortJars: PropTypes.array,
  optionsSortYear: PropTypes.array,

  tabSort: PropTypes.string,
  setTabSort: PropTypes.func,
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

ReportSort.defaultProps = {
  optionSortMonth: [],
  optionsSortJars: [],
  optionsSortYear: [],

  tabSort: '',
  setTabSort: null,
  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default ReportSort;
