import { objectJarsToArray } from 'common/jars';
import ChartJars from 'components/ChartJars';
import ChartJarsItem from 'components/ChartJars/ChartJars-Item';
import { JARS } from 'constant/common';
import React from 'react';
import { useSelector } from 'react-redux';

const arrJars = objectJarsToArray(JARS);

const ChartJarsContainer = () => {
  const balance = useSelector((state) => state.user.balance);
  const { income, expense } = balance;

  const renderChartJars = () => {
    let result = null;
    result = arrJars.map((jar) => {
      const incomeBalance = income[jar.nameCode];
      const expenseBalance = expense[jar.nameCode];
      const percent = 100 - parseFloat(Number((expenseBalance / incomeBalance) * 100).toFixed(2));
      return (
        <ChartJarsItem
          jar={jar}
          key={jar.nameCode}
          percent={percent}
          remain={incomeBalance - expenseBalance}
        />
      );
    });
    return result;
  };

  return <ChartJars>{renderChartJars()}</ChartJars>;
};

export default ChartJarsContainer;
