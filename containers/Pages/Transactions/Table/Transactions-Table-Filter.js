import { optionsGroups, optionsJars, optionsTypes } from 'common';
import TransactionsTableFilter from 'components/pages/Transactions/Table/Transactions-Table-Filter';
import React from 'react';
import PropTypes from 'prop-types';

const TransactionsTableFilterContainer = (props) => {
  return (
    <TransactionsTableFilter
      optionsFilterTypes={optionsTypes()}
      optionsFilterJars={optionsJars()}
      optionsFilterGroups={optionsGroups()}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    />
  );
};

TransactionsTableFilterContainer.propTypes = {
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

TransactionsTableFilterContainer.defaultProps = {
  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default TransactionsTableFilterContainer;
