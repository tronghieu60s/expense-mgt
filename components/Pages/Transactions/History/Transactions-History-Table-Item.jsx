import { GROUPS, JARS, TYPES } from 'constant/common';
import { formatDateMark } from 'helpers/datetime';
import { formatMoneyLocal } from 'helpers/money';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';

const TransactionsHistoryTableItem = (props) => {
  const { index, transaction } = props;
  const type = TYPES[transaction.type];
  const jar = JARS[transaction.jar];
  const group = GROUPS[transaction.group] || { name: '' };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="weight-700" style={{ color: type.markColor }}>
        {type.mark} {formatMoneyLocal(transaction.money)} đ
      </td>
      <td className="weight-700 text-capitalize" style={{ color: jar.color }}>
        {jar.name}
      </td>
      <td className="weight-700 text-capitalize">{group.name}</td>
      <td>{formatDateMark(transaction.date)}</td>
      <td style={{ whiteSpace: 'normal' }}>{transaction.description}</td>
      <td>
        {props.editButton}
        {props.deleteButton}
      </td>
    </tr>
  );
};

TransactionsHistoryTableItem.propTypes = {
  index: PropTypes.number,
  transaction: PropTypes.shape({
    type: PropTypes.string,
    jar: PropTypes.string,
    money: PropTypes.number,
    group: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
  editButton: PropTypes.element,
  deleteButton: PropTypes.element,
};

TransactionsHistoryTableItem.defaultProps = {
  index: 0,
  transaction: {
    type: '',
    money: 0,
    jar: '',
    group: '',
    date: '',
    description: '',
  },
  editButton: createElement('div'),
  deleteButton: createElement('div'),
};

export default TransactionsHistoryTableItem;
