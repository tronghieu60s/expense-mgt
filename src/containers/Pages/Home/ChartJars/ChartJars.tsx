import ChartJars from 'src/components/Pages/Home/ChartJars/ChartJars';
import ChartJarsItem from 'src/components/Pages/Home/ChartJars/ChartJars-Item';
import { JARS } from 'src/constant/common';
import { objectKeyNameCodeToArray } from 'src/helpers/object';
import React from 'react';
import { useSelector } from 'react-redux';

const arrJars = objectKeyNameCodeToArray(JARS);

const ChartJarsContainer = (): JSX.Element => {
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
