import * as TEXT from 'constant/text';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Table } from 'react-bootstrap';

const TransactionsTable = (props) => {
  return (
    <>
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
      <div className="d-flex justify-content-end mt-2">{props.pagination}</div>
    </>
  );
};

TransactionsTable.propTypes = {
  pagination: PropTypes.element,
  children: PropTypes.array,
};

TransactionsTable.defaultProps = {
  pagination: createElement('div'),
  children: [],
};

export default TransactionsTable;
