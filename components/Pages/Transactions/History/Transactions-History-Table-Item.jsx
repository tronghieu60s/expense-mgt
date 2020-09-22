import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const TransactionsHistoryTableItem = (props) => {
  return (
    <tr>
      <td>2</td>
      <td className="weight-700 text-success">+ 300.000 đ</td>
      <td className="weight-700 text-primary text-capitalize">Tiết kiệm</td>
      <td className="weight-700 text-primary text-capitalize">Ăn uống</td>
      <td>20/12/2001</td>
      <td style={{ whiteSpace: 'normal' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa iste quos impedit
        dolor. Eius accusantium incidunt, esse quidem libero atque necessitatibus soluta quam iusto
        ipsam placeat, debitis quo illo?
      </td>
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

TransactionsHistoryTableItem.propTypes = {};

export default TransactionsHistoryTableItem;
