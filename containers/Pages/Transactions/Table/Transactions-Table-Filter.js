import { optionsGroups, optionsJars, optionsTypes } from 'common';
import TransactionsTableFilter from 'components/Pages/Transactions/Table/Transactions-Table-Filter';
import React from 'react';

const TransactionsTableFilterContainer = () => {
  return (
    <TransactionsTableFilter
      optionsFilterTypes={optionsTypes()}
      optionsFilterJars={optionsJars()}
      optionsFilterGroups={optionsGroups()}
    />
  );
};

export default TransactionsTableFilterContainer;
