import { formatDateMark } from 'helpers/datetime';
import { formatMoneyLocal } from 'helpers/money';
import PropTypes from 'prop-types';
import React from 'react';

const TransactionsHistoryItem = (props) => {
  const { infoJar, transaction } = props;
  const colorMoney = transaction.type === 'income' ? 'text-success' : 'text-danger';
  const markMoney = transaction.type === 'income' ? '+' : '-';
  const colorJar = infoJar ? infoJar.color : '#000';

  return (
    <div className="d-flex justify-content-between py-2">
      <div className="d-flex">
        <div className="mr-2 mt-1">
          <button type="button" className="btn btn-secondary btn-sm">
            <i className="fa fa-flask" aria-hidden="true" style={{ color: colorJar }} />
          </button>
        </div>
        <div>
          <div className="text-13 text-capitalize weight-700">{infoJar.name}</div>
          <div className="text-11">{transaction.description || '...'}</div>
        </div>
      </div>
      <div className="text-right">
        <div className={`text-12 ${colorMoney} weight-700`}>
          {markMoney} {formatMoneyLocal(transaction.money)} <u>đ</u>
        </div>
        <div className="text-12">{formatDateMark(transaction.date)}</div>
      </div>
    </div>
  );
};

TransactionsHistoryItem.propTypes = {
  infoJar: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  transaction: PropTypes.shape({
    type: PropTypes.string,
    money: PropTypes.number,
    jar: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }),
};

TransactionsHistoryItem.defaultProps = {
  infoJar: {
    color: '',
    name: '',
  },
  transaction: {
    type: '',
    money: '',
    jar: '',
    description: '',
    date: '',
  },
};

export default TransactionsHistoryItem;
