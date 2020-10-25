import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'src/redux/actions/ui.action';
import HomeBalancesModal from 'src/components/Pages/Home/Balances/Home-Balances-Modal';
import { JARS } from 'src/constant/common';
import * as STORAGE from 'src/constant/storage';
import * as TEXT from 'src/constant/text';
import { toastCustom } from 'src/helpers/common';
import { addTransactions } from 'src/redux/actions/transactions.action';
import { setUser } from 'src/redux/actions/user.action';
import { newTransaction, updateUser } from 'src/utils/firebase';

interface Props {
  initialValues: any;
  validationSchema: any;
  totalIncome: number;
  totalExpense: number;
  optionsJars: any[];
  optionsGroups: any[];
}

const HomeBalancesModalContainer: React.FC<Props> = (props) => {
  const {
    initialValues,
    validationSchema,
    totalIncome,
    totalExpense,
    optionsJars,
    optionsGroups,
  } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { balance } = user;
  const { income, expense, percent } = balance;

  const [tab, setTab] = useState('income');

  const onSubmit = async (values, { resetForm }) => {
    const type = tab;
    const { money, jar, group, date, description, transfer, receive, no_glass } = values;

    dispatch(showLoadingUi());
    let saveUser;
    switch (type) {
      case 'income':
        if (money % 1000 !== 0) toastCustom('error', TEXT.TRANSACTION_MUST_DIVISIBLE_1000);
        else if (no_glass) {
          const necessities = money + income.necessities;
          const updateBalance = { ...balance, income: { ...income, necessities } };
          const newTransactions = await newTransaction(user._id, {
            type,
            date,
            money,
            description,
            jar: 'necessities',
          });
          saveUser = await updateUser(user._id, { balance: updateBalance });
          dispatch(addTransactions(newTransactions));
          toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
        } else {
          const moneyPercent = money / 100;
          const newJars = {};
          for (const key in percent)
            if (percent.hasOwnProperty(key)) {
              const splitMoney = moneyPercent * percent[key];
              newJars[key] = splitMoney + income[key];
              if (splitMoney !== 0) {
                const newTransactions = await newTransaction(user._id, {
                  type,
                  date,
                  money: splitMoney,
                  description,
                  jar: key,
                });
                dispatch(addTransactions(newTransactions));
              }
            }
          saveUser = await updateUser(user._id, { balance: { ...balance, income: newJars } });
          toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
        }
        break;
      case 'expense':
        if (income[jar] - expense[jar] - money >= 0) {
          expense[jar] += money;
          saveUser = await updateUser(user._id, { balance: { ...balance, expense } });
          const newTransactions = await newTransaction(user._id, {
            type,
            date,
            money,
            description,
            jar,
            group,
          });
          dispatch(addTransactions(newTransactions));
          toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
        } else toastCustom('error', TEXT.TRANSACTION_LARGER_WALLET);
        break;
      case 'move-money':
        if (money <= income[transfer]) {
          income[transfer] -= money;
          income[receive] += money;
          saveUser = await updateUser(user._id, { balance: { ...balance, income } });
          const transferTransaction = await newTransaction(user._id, {
            type: 'expense',
            date,
            money,
            description: `${TEXT.MOVE_TRANSFER_TO} ${JARS[receive].name}`,
            jar: transfer,
            group: 'other',
          });
          const receiveTransaction = await newTransaction(user._id, {
            type: 'income',
            date,
            money,
            description: `${TEXT.MOVE_RECEIVE_FROM} ${JARS[transfer].name}`,
            jar: receive,
          });
          dispatch(addTransactions(transferTransaction));
          dispatch(addTransactions(receiveTransaction));
          toastCustom('success', TEXT.TRANSACTION_ADD_SUCCESS);
        } else toastCustom('error', TEXT.TRANSACTION_LARGER_WALLET);
        break;
      default:
        break;
    }
    if (saveUser) dispatch(setUser(saveUser));
    resetForm({ values: { ...values, money: 0, description: '' } });
    localStorage.setItem(STORAGE.STORAGE_TRANSACTIONS, JSON.stringify(values));

    dispatch(hideLoadingUi());
    return null;
  };

  return (
    <HomeBalancesModal
      tab={tab}
      setTab={(values) => setTab(values)}
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      totalIncome={totalIncome}
      totalExpense={totalExpense}
      optionsJars={optionsJars}
      optionsGroups={optionsGroups}
    />
  );
};

export default React.memo(HomeBalancesModalContainer);
