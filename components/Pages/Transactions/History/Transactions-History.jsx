import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const TransactionsHistory = (props) => {
  return (
    <div className="expense-main-block-deals">
      {props.children}
      <Link href={PATH.HISTORY_PAGE}>
        <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
          {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
        </button>
      </Link>
    </div>
  );
};

TransactionsHistory.propTypes = {
  children: PropTypes.array,
};

TransactionsHistory.defaultProps = {
  children: [],
};

export default TransactionsHistory;
