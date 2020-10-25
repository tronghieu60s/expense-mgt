import React from 'react';
import { GROUPS, JARS, TYPES } from 'src/constant/common';
import { formatDateMark } from 'src/helpers/datetime';
import { formatMoneyLocal } from 'src/helpers/money';

interface Props {
  index: number;
  transaction: {
    type: string;
    jar: string;
    money: number;
    group: string;
    date: string;
    description: string;
  };
  deleteButton: JSX.Element;
}

const TransactionsHistoryTableItem: React.FC<Props> = (props) => {
  const { index, transaction, deleteButton } = props;
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
      <td>{deleteButton}</td>
    </tr>
  );
};

export default TransactionsHistoryTableItem;
