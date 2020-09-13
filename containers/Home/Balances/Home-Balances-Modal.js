import HomeBalancesModal from 'components/Home/Balances/Home-Balances-Modal';
import * as TEXT from 'constant/text';
import { getDateNow } from 'helpers/datetime';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as Yup from 'yup';

const HomeBalancesModalContainer = (props) => {
  const [tab, setTab] = useState('income');

  const initialValues = {
    money: 0,
    jar: '',
    group: '',
    date: getDateNow(),
    description: '',
    transfer: '',
    receive: '',
    no_glass: false,
  };

  const validationSchema = Yup.object().shape({
    money: Yup.number().required(TEXT.FIELD_IS_REQUIRED),
    jar: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    group: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    date: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    description: Yup.string(),
    transfer: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    receive: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    no_glass: Yup.bool().required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <HomeBalancesModal
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      totalIncome={props.totalIncome}
      totalExpense={props.totalExpense}
      optionsJars={props.optionsJars}
      optionsGroups={props.optionsGroups}
      tab={tab}
      setTab={(values) => setTab(values)}
    />
  );
};

HomeBalancesModalContainer.propTypes = {
  totalIncome: PropTypes.number,
  totalExpense: PropTypes.number,
  optionsJars: PropTypes.array,
  optionsGroups: PropTypes.array,
};

HomeBalancesModalContainer.defaultProps = {
  totalIncome: 0,
  totalExpense: 0,
  optionsJars: [],
  optionsGroups: [],
};

export default HomeBalancesModalContainer;
