import TransactionsHistoryItem from 'src/components/Pages/Transactions/History/Transactions-History-Item';
import React from 'react';
import { JARS } from 'src/constant/common';

interface Props {
  transaction: {
    type: string;
    money: number;
    jar: string;
    description: string;
    date: string;
  };
}

const TransactionsHistoryItemContainer: React.FC<Props> = (props) => {
  const { transaction } = props;

  return <TransactionsHistoryItem infoJar={JARS[transaction.jar]} transaction={transaction} />;
};

export default React.memo(TransactionsHistoryItemContainer);
