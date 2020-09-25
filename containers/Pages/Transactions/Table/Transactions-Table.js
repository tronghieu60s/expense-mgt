import TransactionsHistoryTableItem from 'components/pages/Transactions/History/Transactions-History-Table-Item';
import TransactionsTable from 'components/pages/Transactions/Table/Transactions-Table';
import Pagination from 'components/UI/Pagination/Pagination';
import { GROUPS, JARS, TYPES } from 'constant/common';
import * as TEXT from 'constant/text';
import { delayLoading, toastCustom } from 'helpers/common';
import { formatDateMark } from 'helpers/datetime';
import getPagination from 'helpers/pagination';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactions } from 'redux/actions/transactions.action';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { setUser } from 'redux/actions/user.action';
import { deleteTransaction, getTransactions, updateUser } from 'utils/firebase';

const TransactionsTableContainer = (props) => {
  const dispatch = useDispatch();
  const { currentItem, initialValues } = props;
  const { show, type, jar, group } = initialValues;

  const transactions = useSelector((state) => state.transactions);
  const user = useSelector((state) => state.user);
  const { balance } = user;
  const { income, expense } = balance;

  const [numberTrans, setNumberTrans] = useState(transactions.length);
  const [initialTrans, setInitialTrans] = useState([...transactions]);
  const [csvData, setCsvData] = useState([]);

  const pagination = getPagination(numberTrans, currentItem, show);
  const { startIndex, endIndex } = pagination;

  useEffect(() => {
    let newTrans = [...transactions];
    newTrans = type === 'all' ? [...newTrans] : newTrans.filter((label) => label.type === type);
    newTrans = jar === 'all' ? [...newTrans] : newTrans.filter((label) => label.jar === jar);
    newTrans = group === 'all' ? [...newTrans] : newTrans.filter((label) => label.group === group);
    setNumberTrans(newTrans.length);

    // Sort
    newTrans = newTrans.reverse();
    // Slice Page
    newTrans = newTrans.slice(startIndex, endIndex);
    setInitialTrans(newTrans);

    const formatData = newTrans.map((trans) => {
      return {
        type: TYPES[trans.type].name,
        money: trans.money,
        jar: JARS[trans.jar].name,
        group: GROUPS[trans.group] ? GROUPS[trans.group].name : '',
        date: formatDateMark(trans.date),
        description: trans.description,
      };
    });
    setCsvData(formatData);
  }, [initialValues, transactions, currentItem]);

  const deleteItem = async (_id) => {
    dispatch(showLoadingUi());

    const itemDelete = await deleteTransaction(user._id, _id);
    let newBalance = { ...balance };
    if (itemDelete.type === 'income') {
      const cal = balance[itemDelete.type][itemDelete.jar] - itemDelete.money;
      newBalance = {
        ...balance,
        income: { ...income, [itemDelete.jar]: cal },
      };
    }
    if (itemDelete.type === 'expense') {
      const cal = balance[itemDelete.type][itemDelete.jar] + itemDelete.money;
      newBalance = {
        ...balance,
        expense: { ...expense, [itemDelete.jar]: cal },
      };
    }
    const updateData = await updateUser(user._id, { balance: { ...newBalance } });
    dispatch(setUser(updateData));

    await getTransactions(user._id).then((transaction) => {
      dispatch(setTransactions(transaction));
    });
    toastCustom('success', TEXT.DELETE_DATA_SUCCESS);

    await delayLoading();
    dispatch(hideLoadingUi());
  };

  const renderHistoryTableItems = (trans) => {
    let result = null;
    let index = startIndex - 1;
    result = trans.map((tran) => {
      index += 1;
      return (
        <TransactionsHistoryTableItem
          key={tran._id}
          index={index}
          transaction={tran}
          deleteButton={
            <Button variant="danger" size="sm" onClick={() => deleteItem(tran._id)}>
              {TEXT.DELETE}
            </Button>
          }
        />
      );
    });
    return result;
  };

  const csvHeaders = [
    { label: TEXT.TYPE, key: 'type' },
    { label: TEXT.MONEY, key: 'money' },
    { label: TEXT.JAR, key: 'jar' },
    { label: TEXT.GROUP, key: 'group' },
    { label: TEXT.DATE, key: 'date' },
    { label: TEXT.DESCRIPTION, key: 'description' },
  ];

  return (
    <TransactionsTable
      csvHeaders={csvHeaders}
      csvData={csvData}
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
