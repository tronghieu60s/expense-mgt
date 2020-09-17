import HomeBalancesModal from 'components/Home/Balances/Home-Balances-Modal';
import * as TEXT from 'constant/text';
import { toastCustom } from 'helpers/common';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { updateUser, newTransaction } from 'utils/firebase';
import { setUser } from 'redux/actions/user.action';

const HomeBalancesModalContainer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const balance = useSelector((state) => state.user.balance);
  const { income, expense, percent } = balance;

  const [tab, setTab] = useState('income');

  const onSubmit = async (values, { resetForm }) => {
    dispatch(showLoadingUi());

    const type = tab;
    const { money, jar, group, date, description, transfer, receive, no_glass } = values;
    if (money === 0) toastCustom('error', TEXT.TRANSACTION_MUST_MONEY);
    else {
      let saveUser;
      switch (type) {
        case 'income':
          if (no_glass) {
            const necessities = money + income['necessities'];
            const updateBalance = { ...balance, income: { ...income, necessities } };
            await newTransaction(user._id, { type, date, money, description, jar: 'necessities' });
            saveUser = await updateUser(user._id, { balance: updateBalance });
            toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
          } else {
            const moneyPercent = money / 100;
            const newJars = {};
            for (const key in percent)
              if (percent.hasOwnProperty(key)) {
                const splitMoney = moneyPercent * percent[key];
                newJars[key] = splitMoney + income[key];
                if (splitMoney !== 0)
                  await newTransaction(user._id, {
                    type,
                    date,
                    money: splitMoney,
                    description,
                    jar: key,
                  });
              }
            saveUser = await updateUser(user._id, { balance: { ...balance, income: newJars } });
            toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
          }
          break;
        case 'expense':
          if (income[jar] - expense[jar] - money >= 0) {
            expense[jar] += money;
            saveUser = await updateUser(user._id, { balance: { ...balance, expense } });
            await newTransaction(user._id, {
              type,
              date,
              money,
              description,
              jar,
              group,
            });
            toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
          } else toastCustom('error', TEXT.TRANSACTION_LARGER_WALLET);
          break;
        case 'move-money':
          if (money <= income[transfer]) {
            income[transfer] -= money;
            income[receive] += money;
            saveUser = await updateUser(user._id, { balance: { ...balance, income } });
            toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
          } else toastCustom('error', TEXT.TRANSACTION_LARGER_WALLET);
          break;
        default:
          break;
      }
      if (saveUser) dispatch(setUser(saveUser));
      resetForm({ values: { ...values, money: 0, description: '' } });
    }

    localStorage.setItem('.config_transactions', JSON.stringify(values));
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
