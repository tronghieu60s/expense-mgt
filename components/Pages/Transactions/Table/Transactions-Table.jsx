import * as TEXT from 'constant/text';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'react-bootstrap';

const TransactionsTable = (props) => {
  return (
    <Table className="table-responsive-md" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{TEXT.MONEY}</th>
          <th>{TEXT.JAR}</th>
          <th>{TEXT.GROUP}</th>
          <th>{TEXT.DATE}</th>
          <th>{TEXT.DESCRIPTION}</th>
          <th>{TEXT.ACTION}</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  children: PropTypes.array,
};

TransactionsTable.defaultProps = {
  children: [],
};

export default TransactionsTable;
