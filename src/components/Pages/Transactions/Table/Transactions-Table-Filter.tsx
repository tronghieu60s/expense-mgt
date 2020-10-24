import FormAlternative from 'src/components/UI/Form/FormAlternative';
import SelectAlternative from 'src/components/UI/Form/SelectAlternative';
import * as TEXT from 'src/constant/text';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  optionsFilterTypes: any;
  optionsFilterJars: any;
  optionsFilterGroups: any;
  initialValues: {
    type: string;
  };
  validationSchema: any;
  onSubmit: any;
}

const TransactionsTableFilter: React.FC<Props> = (props) => {
  const {
    optionsFilterTypes,
    optionsFilterJars,
    optionsFilterGroups,
    initialValues,
    validationSchema,
    onSubmit,
  } = props;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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

export default TransactionsTableFilter;
