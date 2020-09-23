import * as TEXT from 'constant/text';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Table } from 'react-bootstrap';

const TransactionsTable = (props) => {
  const { numberTrans } = props;

  return (
    <>
      <div className="text-14 text-right weight-700 mb-2">{numberTrans} mục</div>
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
        <tbody>
          {props.children.length !== 0 ? (
            props.children
          ) : (
            <tr>
              <td className="text-center" colSpan={7}>
                {TEXT.TRANSACTIONS_NOT_FOUND}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end mt-2">{props.pagination}</div>
    </>
  );
};

TransactionsTable.propTypes = {
  numberTrans: PropTypes.number,
  pagination: PropTypes.element,
  children: PropTypes.array,
};

TransactionsTable.defaultProps = {
  numberTrans: 0,
  pagination: createElement('div'),
  children: [],
};

export default TransactionsTable;
