import Report from 'components/Pages/Report';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import { getDateNowAgo, parseDateString } from 'helpers/datetime';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import ChartJarsAllContainer from '../Home/ChartJars/ChartJars-All';
import ReportChartContainer from './Report-Chart';
import ReportSortContainer from './Report-Sort';
import { arrSortObjectDate } from 'helpers/array';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { delayLoading, toastCustom } from 'helpers/common';

const ReportContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [tabSort, setTabSort] = useState('day');

  const sortedTransactions = arrSortObjectDate(transactions);

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

    console.log(values);

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
        componentBlock5={<ReportChartContainer />}
      />
    </LayoutMain>
  );
};

ReportContainer.propTypes = {};

export default React.memo(ReportContainer);
