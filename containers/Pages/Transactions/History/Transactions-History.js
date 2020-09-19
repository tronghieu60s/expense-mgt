import TransactionsHistory from 'components/Pages/Transactions/History/Transactions-History';
import React from 'react';
import { useSelector } from 'react-redux';
import TransactionsHistoryItem from './Transactions-History-Item';

const TransactionsHistoryContainer = () => {
  const transactions = useSelector((state) => state.transactions);

  const renderDealsItems = (arr) => {
    let result = null;
    const newArr = arr.slice(Math.max(arr.length - 3, 0)).reverse();
    result = newArr.map((tran) => {
      return <TransactionsHistoryItem key={tran._id} transaction={tran} />;
    });
    return result;
  };

  return <TransactionsHistory>{renderDealsItems(transactions)}</TransactionsHistory>;
};

export default React.memo(TransactionsHistoryContainer);
