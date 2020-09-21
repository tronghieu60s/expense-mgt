import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import TransactionsHistoryItem from './Transactions-History-Item';

const TransactionsHistoryContainer = (props) => {
  const { length } = props;
  const transactions = useSelector((state) => state.transactions);

  const renderDealsItems = (arr) => {
    let result = null;
    const newArr = arr.slice(Math.max(arr.length - length, 0)).reverse();
    result = newArr.map((tran) => {
      return <TransactionsHistoryItem key={tran._id} transaction={tran} />;
    });
    return result;
  };

  return <>{renderDealsItems(transactions)}</>;
};

TransactionsHistoryContainer.propTypes = {
  length: PropTypes.number,
};

TransactionsHistoryContainer.defaultProps = {
  length: 3,
};

export default React.memo(TransactionsHistoryContainer);
