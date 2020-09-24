import TransactionsHistoryItem from 'components/pages/Transactions/History/Transactions-History-Item';
import PropTypes from 'prop-types';
import React from 'react';
import { JARS } from 'constant/common';

const TransactionsHistoryItemContainer = (props) => {
  const { transaction } = props;

  return <TransactionsHistoryItem infoJar={JARS[transaction.jar]} transaction={transaction} />;
};

TransactionsHistoryItemContainer.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string,
    money: PropTypes.number,
    jar: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }),
};

TransactionsHistoryItemContainer.defaultProps = {
  transaction: {
    money: 0,
    type: '',
    jar: '',
    description: '',
    date: '',
  },
};

export default React.memo(TransactionsHistoryItemContainer);
