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
  const [numberTrans, setNumberTrans] = useState(transactions.length);
  const [initialTrans, setInitialTrans] = useState([...transactions]);

  const pagination = getPagination(numberTrans, currentItem, show);
  const { startIndex, endIndex } = pagination;

  useEffect(() => {
    let newTrans = [...transactions];
    newTrans = type === 'all' ? [...newTrans] : newTrans.filter((label) => label.type === type);
    newTrans = jar === 'all' ? [...newTrans] : newTrans.filter((label) => label.jar === jar);
    newTrans = group === 'all' ? [...newTrans] : newTrans.filter((label) => label.group === group);
    setNumberTrans(newTrans.length);

    // Slice Page
    newTrans = newTrans.slice(startIndex, endIndex);
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
    <TransactionsTable
      numberTrans={numberTrans}
      pagination={<Pagination pagination={pagination} />}
    >
      {renderHistoryTableItems(initialTrans)}
    </TransactionsTable>
  );
};

TransactionsTableContainer.propTypes = {
  currentItem: PropTypes.number,
  initialValues: PropTypes.shape({
    show: PropTypes.number,
    type: PropTypes.string,
    jar: PropTypes.string,
    group: PropTypes.string,
  }),
};

TransactionsTableContainer.defaultProps = {
  currentItem: 1,
  initialValues: {
    show: 5,
    type: 'all',
    jar: 'all',
    group: 'all',
  },
};

export default React.memo(TransactionsTableContainer);
