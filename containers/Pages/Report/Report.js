import Report from 'components/pages/Report/Report';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/layout/Layout-Main';
import HomeBalances from 'containers/pages/Home/Balances/Home-Balances';
import { delayLoading } from 'helpers/common';
import { getDateNowAgo, parseDateString } from 'helpers/datetime';
import { objectKeyToArray } from 'helpers/object';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import BackupsContainer from '../Home/Backups/Backups';
import ChartJarsAllContainer from '../Home/ChartJars/ChartJars-All';
import ReportSortContainer from './Report-Sort';
import ReportChartContainer from './ReportChart';

const arrNameJars = objectKeyToArray(JARS);

const ReportContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  const [tabSort, setTabSort] = useState('day');
  const monthNow = new Date().getMonth() + 1;
  const [initialValues, setInitialValues] = useState({
    date: getDateNowAgo(6),
    show: 6,
    year: String(new Date().getFullYear()),
    jar: 'all',
    fromMonth: String(monthNow - 3 > 0 ? monthNow - 3 : monthNow),
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
    fromMonth: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());
    setInitialValues(values);
    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <LayoutMain title={TEXT.REPORT_REVENUE_EXPENDITURE}>
      <Report
        componentBlock1={<HomeBalances />}
        componentBlock2={<BackupsContainer />}
        componentBlock3={
          <ReportSortContainer
            tabSort={tabSort}
            setTabSort={(value) => setTabSort(value)}
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
