import TransactionsHistoryTableItem from 'components/Pages/Transactions/History/Transactions-History-Table-Item';
import TransactionsTable from 'components/Pages/Transactions/Table/Transactions-Table';
import Pagination from 'components/UI/Pagination';
import getPagination from 'helpers/pagination';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TransactionsTableContainer = (props) => {
  const { currentItem, initialValues } = props;
  const { show, type, jar, group } = initialValues;

  const transactions = useSelector((state) => state.transactions);
  const [initialTrans, setInitialTrans] = useState([...transactions]);

  const pagination = getPagination(transactions.length, currentItem, show);
  const { startIndex, endIndex } = pagination;

  useEffect(() => {
    const newTrans = transactions.slice(startIndex, endIndex);
    setInitialTrans(newTrans);
  }, [initialValues, transactions, currentItem]);

  const renderHistoryTableItems = (trans) => {
    let result = null;
    let index = startIndex - 1;
    result = trans.map((tran) => {
      index += 1;
      return <TransactionsHistoryTableItem key={tran._id} index={index} transaction={tran} />;
    });
    return result;
  };

  return (
    <TransactionsTable pagination={<Pagination pagination={pagination} />}>
      {renderHistoryTableItems(initialTrans)}
    </TransactionsTable>
  );
};

TransactionsTableContainer.propTypes = {
  currentItem: PropTypes.number,
  initialValues: PropTypes.shape({}),
};

TransactionsTableContainer.defaultProps = {
  currentItem: 1,
  initialValues: {},
};

export default React.memo(TransactionsTableContainer);
