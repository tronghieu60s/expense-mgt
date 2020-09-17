import HomeBalancesModal from 'components/Home/Balances/Home-Balances-Modal';
import * as TEXT from 'constant/text';
import { delayLoading, toastCustom } from 'helpers/common';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';

const HomeBalancesModalContainer = (props) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState('income');

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    if (values.money === 0) toastCustom('error', TEXT.TRANSACTION_MUST_MONEY);
    console.log(values);

    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <HomeBalancesModal
      tab={tab}
      setTab={(values) => setTab(values)}
      onSubmit={onSubmit}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      totalIncome={props.totalIncome}
      totalExpense={props.totalExpense}
      optionsJars={props.optionsJars}
      optionsGroups={props.optionsGroups}
    />
  );
};

HomeBalancesModalContainer.propTypes = {
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  totalIncome: PropTypes.number,
  totalExpense: PropTypes.number,
  optionsJars: PropTypes.array,
  optionsGroups: PropTypes.array,
};

HomeBalancesModalContainer.defaultProps = {
  initialValues: {},
  validationSchema: {},
  totalIncome: 0,
  totalExpense: 0,
  optionsJars: [],
  optionsGroups: [],
};

export default HomeBalancesModalContainer;
