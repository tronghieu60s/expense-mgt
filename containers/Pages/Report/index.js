import Report from 'components/Pages/Report';
import ReportChart from 'components/Pages/Report/Report-Chart';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import { arrayUniqueValue, arrSortObjectDate } from 'helpers/array';
import { delayLoading } from 'helpers/common';
import { getDateNowAgo, parseDateString, formatDateMark } from 'helpers/datetime';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import ChartJarsAllContainer from '../Home/ChartJars/ChartJars-All';
import ReportSortContainer from './Report-Sort';

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
    show: 5,
    month: String(new Date().getMonth() + 1),
    year: String(new Date().getFullYear()),
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .transform(parseDateString)
      .required(TEXT.FIELD_IS_REQUIRED),
    show: Yup.number().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    month: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    year: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    let totalInData = { income: 0, expense: 0 };
    const arrIncome = [];
    const arrExpense = [];
    switch (tabSort) {
      case 'day': {
        let labels = arrayUniqueValue(transSort.map((res) => res.date));
        for (let i = 0; i < labels.length; i += 1) {
          totalInData = { income: 0, expense: 0 };
          if (new Date(values.date) <= new Date(labels[i])) {
            transSort.forEach((trans) => {
              if (labels[i] === trans.date) totalInData[trans.type] += trans.money;
            });
            arrIncome.push(totalInData.income);
            arrExpense.push(totalInData.expense);
          }
        }

        labels = labels.map((res) => formatDateMark(res));
        setLabelsDate(labels);
        setIncomeData(arrIncome);
        setExpenseData(arrExpense);
        break;
      }
      case 'month':
        break;
      case 'year':
        break;
      default:
        break;
    }

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
