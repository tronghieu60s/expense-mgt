import Transactions from 'components/Pages/Transactions';
import PaginationUI from 'components/UI/Pagination';
import { GROUPS, JARS, TYPES } from 'constant/common';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import { objectKeyToArray } from 'helpers/object';
import React, { useState } from 'react';
import * as Yup from 'yup';
import BackupsContainer from '../Home/Backups';
import TransactionsTableContainer from './Table/Transactions-Table';
import TransactionsTableFilterContainer from './Table/Transactions-Table-Filter';

const arrNameTypes = objectKeyToArray(TYPES);
const arrNameJars = objectKeyToArray(JARS);
const arrNameGroups = objectKeyToArray(GROUPS);

const TransactionsContainer = () => {
  const [initialValues, setInitialValues] = useState({
    show: 5,
    type: 'all',
    jar: 'all',
    group: 'all',
  });

  const validationSchema = Yup.object().shape({
    show: Yup.number().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    type: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf([...arrNameTypes, 'all'], TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    jar: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf([...arrNameJars, 'all'], TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    group: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf([...arrNameGroups, 'all'], TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <LayoutMain title={TEXT.TRANSACTIONS_HISTORY}>
      <Transactions
        componentBlock1={<HomeBalances />}
        componentBlock2={<BackupsContainer />}
        componentBlock3={
          <TransactionsTableFilterContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          />
        }
        componentBlock4={<TransactionsTableContainer />}
        componentBlock5={<PaginationUI />}
      />
    </LayoutMain>
  );
};

export default TransactionsContainer;
