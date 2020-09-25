import Transactions from 'components/pages/Transactions/Transactions';
import { GROUPS, JARS, TYPES } from 'constant/common';
import { STORAGE_TABLE_HISTORY } from 'constant/storage';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/layout/Layout-Main';
import HomeBalances from 'containers/pages/Home/Balances/Home-Balances';
import { delayLoading } from 'helpers/common';
import { objectKeyToArray } from 'helpers/object';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import BackupsContainer from '../Home/Backups/Backups';
import TransactionsTableContainer from './Table/Transactions-Table';
import TransactionsTableFilterContainer from './Table/Transactions-Table-Filter';

const arrNameTypes = objectKeyToArray(TYPES);
const arrNameJars = objectKeyToArray(JARS);
const arrNameGroups = objectKeyToArray(GROUPS);

const TransactionsContainer = () => {
  const router = useRouter();
  const { page } = router.query;

  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    show: 5,
    type: 'all',
    jar: 'all',
    group: 'all',
  });

  useEffect(() => {
    const storageFilter = JSON.parse(localStorage.getItem(STORAGE_TABLE_HISTORY));
    if (storageFilter) setInitialValues(storageFilter);
  }, []);

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

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    const newValues = values.type !== 'expense' ? { ...values, group: 'all' } : values;
    setInitialValues(newValues);
    localStorage.setItem(STORAGE_TABLE_HISTORY, JSON.stringify(newValues));

    router.push({
      pathname: router.pathname,
      query: {
        page: 1,
      },
    });

    await delayLoading();
    dispatch(hideLoadingUi());
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
        componentBlock4={
          <TransactionsTableContainer
            initialValues={initialValues}
            currentItem={parseInt(page || 1, 10)}
          />
        }
      />
    </LayoutMain>
  );
};

export default React.memo(TransactionsContainer);
