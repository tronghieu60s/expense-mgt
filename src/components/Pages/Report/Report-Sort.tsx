import FormAlternative from 'src/components/UI/Form/FormAlternative';
import SelectAlternative from 'src/components/UI/Form/SelectAlternative';
import * as TEXT from 'src/constant/text';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

interface Props {
  optionSortMonth: any;
  optionsSortJars: any;
  optionsSortYear: any;

  tabSort: string;
  setTabSort: any;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const ReportSort: React.FC<Props> = (props) => {
  const {
    optionSortMonth,
    optionsSortYear,
    optionsSortJars,
    tabSort,
    setTabSort,
    initialValues,
    validationSchema,
    onSubmit,
  } = props;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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

export default ReportSort;
