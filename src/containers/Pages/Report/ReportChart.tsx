import ReportChart from 'src/components/Pages/Report/Report-Chart';
import { arrayUniqueValue, arrSortObjectDate } from 'src/helpers/array';
import { formatDateMark, getDateNowAgo } from 'src/helpers/datetime';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  tabSort?: string;
  initialValues?: {
    date: string;
    show: number;
    year: string;
    jar: string;
    fromMonth: string;
  };
}

const defaultProps: Props = {
  tabSort: 'day',
  initialValues: {
    date: getDateNowAgo(6),
    show: 6,
    year: String(new Date().getFullYear()),
    jar: 'all',
    fromMonth: '1',
  },
};

const ReportChartContainer: React.FC<Props> = (props) => {
  const { tabSort, initialValues } = props;
  const transactions = useSelector((state) => state.transactions);
  const transSort = arrSortObjectDate(transactions);

  const [labelsDate, setLabelsDate] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    let labels = [...transSort];
    const transJars =
      initialValues.jar === 'all'
        ? [...transSort]
        : transSort.filter((label) => label.jar === initialValues.jar);
    // Filter Jars
    labels = arrayUniqueValue(labels.map((res) => res.date));

    let totalInData = { income: 0, expense: 0 };
    const arrIncome = [];
    const arrExpense = [];
    switch (tabSort) {
      case 'day': {
        labels = labels.filter((label) => new Date(initialValues.date) <= new Date(label));
        // Filter Number Show
        labels = labels.slice(0, initialValues.show);

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
          (label) => Number(initialValues.fromMonth) <= new Date(label).getMonth() + 1,
        );
        // Filter Year
        labels = labels.filter(
          (label) => Number(initialValues.year) === new Date(label).getFullYear(),
        );
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
  }, [initialValues, tabSort, transactions]);

  return <ReportChart labelsDate={labelsDate} incomeData={incomeData} expenseData={expenseData} />;
};

ReportChartContainer.defaultProps = defaultProps;

export default React.memo(ReportChartContainer);
