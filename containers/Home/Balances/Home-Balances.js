import HomeBalances from 'components/Home/Balances/Home-Balances';
import { GROUPS, JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import { getDateNow } from 'helpers/datetime';
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

  const initialValues = {
    money: 0,
    jar: 'necessities',
    group: 'food',
    date: getDateNow(),
    description: '',
    transfer: 'necessities',
    receive: 'education',
    no_glass: false,
  };

  const dateReg = /^\d{4}([-])\d{2}\1\d{2}$/;
  const validationSchema = Yup.object().shape({
    money: Yup.number().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    jar: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameJars, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    group: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .oneOf(arrNameGroups, TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
    date: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .matches(dateReg, TEXT.FIELD_NOT_MATCHES)
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

  const optionsJars = (data) => {
    const result = [];
    for (const key in JARS)
      if (JARS.hasOwnProperty(key)) result.push({ key, value: `${JARS[key].name} - ${data[key]}` });
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
        optionsJars={optionsJars(income)}
        optionsGroups={optionsGroups()}
      />
    </HomeBalances>
  );
};

export default HomeBalancesContainer;
