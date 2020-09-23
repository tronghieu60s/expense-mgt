import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { TYPES, JARS, GROUPS } from 'constant/common';
import { formatDateMark } from 'helpers/datetime';

const TransactionsHistoryTableItem = (props) => {
  const { index, transaction } = props;
  const type = TYPES[transaction.type];
  const jar = JARS[transaction.jar];
  const group = GROUPS[transaction.group] || { name: '' };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="weight-700" style={{ color: type.markColor }}>
        {type.mark} 300.000 đ
      </td>
      <td className="weight-700 text-capitalize" style={{ color: jar.color }}>
        {jar.name}
      </td>
      <td className="weight-700 text-capitalize">{group.name}</td>
      <td>{formatDateMark(transaction.date)}</td>
      <td style={{ whiteSpace: 'normal' }}>{transaction.description}</td>
      <td>
        <Button variant="warning" size="sm">
          Sửa
        </Button>
        <Button variant="danger" size="sm">
          Xóa
        </Button>
      </td>
    </tr>
  );
};

TransactionsHistoryTableItem.propTypes = {
  index: PropTypes.number,
  transaction: PropTypes.shape({
    type: PropTypes.string,
    jar: PropTypes.string,
    group: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
};

TransactionsHistoryTableItem.defaultProps = {
  index: 0,
  transaction: {
    type: '',
    jar: '',
    group: '',
    date: '',
    description: '',
  },
};

export default TransactionsHistoryTableItem;
