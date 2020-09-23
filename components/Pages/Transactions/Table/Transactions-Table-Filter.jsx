import FormAlternative from 'components/UI/Form/FormAlternative';
import SelectAlternative from 'components/UI/Form/SelectAlternative';
import * as TEXT from 'constant/text';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const TransactionsTableFilter = (props) => {
  const { initialValues, optionsFilterTypes, optionsFilterJars, optionsFilterGroups } = props;

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      <Form>
        <div className="d-flex">
          <div className="mr-1">
            <FastField
              name="type"
              component={SelectAlternative}
              placeholder={TEXT.FILTER_BY_TYPE}
              options={optionsFilterTypes}
            />
          </div>
          <div className="mr-1">
            <FastField
              name="jar"
              component={SelectAlternative}
              placeholder={TEXT.FILTER_BY_JARS}
              options={optionsFilterJars}
            />
          </div>
          {initialValues.type === 'expense' && (
            <div className="mr-1">
              <FastField
                name="group"
                component={SelectAlternative}
                placeholder={TEXT.FILTER_BY_GROUPS}
                options={optionsFilterGroups}
              />
            </div>
          )}
        </div>
        <div className="d-inline-block mr-2" style={{ width: '100px' }}>
          <FastField
            name="show"
            component={FormAlternative}
            type="number"
            placeholder={TEXT.FILTER_BY_NUMBER}
          />
        </div>
        <Button className="py-1 px-3" type="submit" variant="primary" size="sm">
          {TEXT.FILTER}
        </Button>
      </Form>
    </Formik>
  );
};

TransactionsTableFilter.propTypes = {
  optionsFilterTypes: PropTypes.array,
  optionsFilterJars: PropTypes.array,
  optionsFilterGroups: PropTypes.array,

  initialValues: PropTypes.shape({
    type: PropTypes.string,
  }),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

TransactionsTableFilter.defaultProps = {
  optionsFilterTypes: [],
  optionsFilterJars: [],
  optionsFilterGroups: [],

  initialValues: {
    type: 'all',
  },
  validationSchema: {},
  onSubmit: null,
};

export default TransactionsTableFilter;
