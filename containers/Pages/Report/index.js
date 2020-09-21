import Report from 'components/Pages/Report';
import ReportChart from 'components/Pages/Report/Report-Chart';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import { arrayUniqueValue, arrSortObjectDate } from 'helpers/array';
import { delayLoading } from 'helpers/common';
import { formatDateMark, getDateNowAgo, parseDateString } from 'helpers/datetime';
import { objectKeyToArray } from 'helpers/object';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import ChartJarsAllContainer from '../Home/ChartJars/ChartJars-All';
import ReportSortContainer from './Report-Sort';

const arrNameJars = objectKeyToArray(JARS);

const ReportContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const transSort = arrSortObjectDate(transactions);

  const [labelsDate, setLabelsDate] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [tabSort, setTabSort] = useState('day');

  const initialValues = {
    date: getDateNowAgo(6),
    show: 6,
    year: String(new Date().getFullYear()),
    jar: 'all',
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .transform(parseDateString)
      .required(TEXT.FIELD_IS_REQUIRED),
    show: Yup.number().typeError(TEXT.FIELD_NOT_MATCHES),
    year: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    jar: Yup.string()
      .oneOf([...arrNameJars, 'all'], TEXT.FIELD_NOT_MATCHES)
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

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

    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <LayoutMain>
      <Report
        componentBlock1={<HomeBalances />}
        componentBlock2={<TransactionsHistory length={3} />}
        componentBlock3={
          <ReportSortContainer
            tabSort={tabSort}
            setTabSort={(e) => setTabSort(e.target.value)}
            transactions={transactions}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          />
        }
        componentBlock4={<ChartJarsAllContainer />}
        componentBlock5={
          <ReportChart labelsDate={labelsDate} incomeData={incomeData} expenseData={expenseData} />
        }
      />
    </LayoutMain>
  );
};

ReportContainer.propTypes = {};

export default React.memo(ReportContainer);
