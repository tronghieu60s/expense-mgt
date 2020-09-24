import HomeBalances from 'components/pages/Home/Balances/Home-Balances';
import { GROUPS, JARS } from 'constant/common';
import * as STORAGE from 'constant/storage';
import * as TEXT from 'constant/text';
import { getDateNow, parseDateString } from 'helpers/datetime';
import { formatMoneyLocal } from 'helpers/money';
import { objectKeyToArray, objectTotalValues } from 'helpers/object';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import HomeBalancesModal from './Home-Balances-Modal';

const arrNameJars = objectKeyToArray(JARS);
const arrNameGroups = objectKeyToArray(GROUPS);

const HomeBalancesContainer = () => {
  const balance = useSelector((state) => state.user.balance);

  const { income, expense } = balance;
  const totalIncome = objectTotalValues(income);
  const totalExpense = objectTotalValues(expense);

  const configTransactions = JSON.parse(localStorage.getItem(STORAGE.STORAGE_TRANSACTIONS));
  const initialValues = configTransactions
    ? {
        ...configTransactions,
        money: 0,
        description: '',
        date: getDateNow(),
      }
    : {
        money: 0,
        jar: arrNameJars[0],
        group: arrNameGroups[0],
        date: getDateNow(),
        description: '',
        transfer: arrNameJars[0],
        receive: arrNameJars[1],
        no_glass: false,
      };

  const validationSchema = Yup.object().shape({
    money: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(1, TEXT.TRANSACTION_MUST_MONEY),
    jar: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameJars, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    group: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameGroups, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    date: Yup.date()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .transform(parseDateString)
      .required(TEXT.FIELD_IS_REQUIRED),
    description: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES),
    transfer: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameJars, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    receive: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameJars, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    no_glass: Yup.bool().typeError(TEXT.FIELD_NOT_MATCHES),
  });

  const optionsJars = () => {
    const result = [];
    for (const key in JARS)
      if (JARS.hasOwnProperty(key)) {
        const minus = income[key] - expense[key];
        result.push({ key, value: `${JARS[key].name} - ${formatMoneyLocal(minus)} đ` });
      }
    return result;
  };

  const optionsGroups = () => {
    const result = [];
    for (const key in GROUPS)
      if (GROUPS.hasOwnProperty(key)) result.push({ key, value: GROUPS[key].name });
    return result;
  };

  return (
    <HomeBalances totalIncome={totalIncome} totalExpense={totalExpense}>
      <HomeBalancesModal
        initialValues={initialValues}
        validationSchema={validationSchema}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        optionsJars={optionsJars()}
        optionsGroups={optionsGroups()}
      />
    </HomeBalances>
  );
};

export default HomeBalancesContainer;
