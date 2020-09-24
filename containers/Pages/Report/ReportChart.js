import ReportChart from 'components/pages/Report/Report-Chart';
import { arrayUniqueValue, arrSortObjectDate } from 'helpers/array';
import { formatDateMark, getDateNowAgo } from 'helpers/datetime';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ReportChartContainer = (props) => {
  const { tabSort } = props;
  const values = props.initialValues;
  const transactions = useSelector((state) => state.transactions);
  const transSort = arrSortObjectDate(transactions);

  const [labelsDate, setLabelsDate] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    let labels = [...transSort];
    const transJars =
      values.jar === 'all' ? [...transSort] : transSort.filter((label) => label.jar === values.jar);
    // Filter Jars
    labels = arrayUniqueValue(labels.map((res) => res.date));

    let totalInData = { income: 0, expense: 0 };
    const arrIncome = [];
    const arrExpense = [];
    switch (tabSort) {
      case 'day': {
        labels = labels.filter((label) => new Date(values.date) <= new Date(label));
        // Filter Number Show
        labels = labels.slice(0, values.show);

        for (let i = 0; i < labels.length; i += 1) {
          totalInData = { income: 0, expense: 0 };
          transJars.forEach((trans) => {
            if (labels[i] === trans.date) totalInData[trans.type] += trans.money;
          });
          arrIncome.push(totalInData.income);
          arrExpense.push(totalInData.expense);
        }

        labels = labels.map((res) => formatDateMark(res));
        break;
      }
      case 'month':
        // Filter From Month
        labels = labels.filter(
          (label) => Number(values.fromMonth) <= new Date(label).getMonth() + 1,
        );
        // Filter Year
        labels = labels.filter((label) => Number(values.year) === new Date(label).getFullYear());
        // Filter Month
        labels = arrayUniqueValue(labels.map((label) => new Date(label).getMonth() + 1));

        for (let i = 0; i < labels.length; i += 1) {
          totalInData = { income: 0, expense: 0 };
          transJars.forEach((trans) => {
            if (labels[i] === new Date(trans.date).getMonth() + 1)
              totalInData[trans.type] += trans.money;
          });
          arrIncome.push(totalInData.income);
          arrExpense.push(totalInData.expense);
        }

        labels = labels.map((res) => `T${res}`);
        break;
      case 'year':
        // Filter Year
        labels = arrayUniqueValue(labels.map((label) => new Date(label).getFullYear()));

        for (let i = 0; i < labels.length; i += 1) {
          totalInData = { income: 0, expense: 0 };
          transJars.forEach((trans) => {
            if (labels[i] === new Date(trans.date).getFullYear())
              totalInData[trans.type] += trans.money;
          });
          arrIncome.push(totalInData.income);
          arrExpense.push(totalInData.expense);
        }

        break;
      default:
        break;
    }

    setLabelsDate(labels);
    setIncomeData(arrIncome);
    setExpenseData(arrExpense);
  }, [values, tabSort, transactions]);

  return <ReportChart labelsDate={labelsDate} incomeData={incomeData} expenseData={expenseData} />;
};

ReportChartContainer.propTypes = {
  tabSort: PropTypes.string,

  initialValues: PropTypes.shape({
    date: PropTypes.string,
    show: PropTypes.number,
    year: PropTypes.string,
    jar: PropTypes.string,
    fromMonth: PropTypes.string,
  }),
};

ReportChartContainer.defaultProps = {
  tabSort: 'day',

  initialValues: {
    date: getDateNowAgo(6),
    show: 6,
    year: String(new Date().getFullYear()),
    jar: 'all',
    fromMonth: '1',
  },
};

export default React.memo(ReportChartContainer);
