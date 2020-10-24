import * as TEXT from 'src/constant/text';
import { getDateNow } from 'src/helpers/datetime';
import React, { createElement } from 'react';
import { Table } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

interface Props {
  csvData: any;
  csvHeaders: any;
  numberTrans: number;
  pagination: JSX.Element;
  modalDelete: JSX.Element;
  children: any;
}

const TransactionsTable = (props) => {
  const { csvData, csvHeaders, numberTrans, pagination, modalDelete, children } = props;

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
          {children.length !== 0 ? (
            children
          ) : (
            <tr>
              <td className="text-center" colSpan={7}>
                {TEXT.TRANSACTIONS_NOT_FOUND}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <CSVLink
          data={csvData}
          headers={csvHeaders}
          filename={`Expense_(${getDateNow()}).csv`}
          className="btn btn-success btn-sm text-capitalize"
          target="_blank"
        >
          {TEXT.EXPORT} {TEXT.FILE_EXCEL}
        </CSVLink>
        {pagination}
      </div>
      {modalDelete}
    </>
  );
};

export default TransactionsTable;
