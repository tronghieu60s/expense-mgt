import HomeBalances from 'components/Home/Balances/Home-Balances';
import { GROUPS, JARS } from 'constant/common';
import { objectTotalValues } from 'helpers/object';
import React from 'react';
import { useSelector } from 'react-redux';
import HomeBalancesModal from './Home-Balances-Modal';

const HomeBalancesContainer = () => {
  const balance = useSelector((state) => state.user.balance);

  const { income, expense } = balance;
  const totalIncome = objectTotalValues(income);
  const totalExpense = objectTotalValues(expense);

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
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        optionsJars={optionsJars(income)}
        optionsGroups={optionsGroups()}
      />
    </HomeBalances>
  );
};

export default HomeBalancesContainer;
