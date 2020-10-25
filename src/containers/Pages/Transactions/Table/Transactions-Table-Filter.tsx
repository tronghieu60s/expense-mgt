import { optionsGroups, optionsJars, optionsTypes } from 'src/common';
import TransactionsTableFilter from 'src/components/Pages/Transactions/Table/Transactions-Table-Filter';
import React from 'react';

interface Props {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const TransactionsTableFilterContainer: React.FC<Props> = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;
  return (
    <TransactionsTableFilter
      optionsFilterTypes={optionsTypes()}
      optionsFilterJars={optionsJars()}
      optionsFilterGroups={optionsGroups()}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default TransactionsTableFilterContainer;
