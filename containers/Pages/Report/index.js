import Report from 'components/Pages/Report';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import { delayLoading } from 'helpers/common';
import { getDateNowAgo, parseDateString } from 'helpers/datetime';
import { objectKeyToArray } from 'helpers/object';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import ChartJarsAllContainer from '../Home/ChartJars/ChartJars-All';
import ReportSortContainer from './Report-Sort';
import ReportChartContainer from './ReportChart';

const arrNameJars = objectKeyToArray(JARS);

const ReportContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const [tabSort, setTabSort] = useState('day');
  const [initialValues, setInitialValues] = useState({
    date: getDateNowAgo(6),
    show: 6,
    year: String(new Date().getFullYear()),
    jar: 'all',
  });

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
    setInitialValues(values);
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
        componentBlock5={<ReportChartContainer tabSort={tabSort} initialValues={initialValues} />}
      />
    </LayoutMain>
  );
};

ReportContainer.propTypes = {};

export default React.memo(ReportContainer);
