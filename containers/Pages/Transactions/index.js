import Transactions from 'components/Pages/Transactions';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import React from 'react';
import BackupsContainer from '../Home/Backups';
import TransactionsTableContainer from './Table/Transactions-Table';
import TransactionsTableFilterContainer from './Table/Transactions-Table-Filter';

const TransactionsContainer = (props) => {
  return (
    <LayoutMain title={TEXT.TRANSACTIONS_HISTORY}>
      <Transactions
        componentBlock1={<HomeBalances />}
        componentBlock2={<BackupsContainer />}
        componentBlock3={<TransactionsTableFilterContainer />}
        componentBlock4={<TransactionsTableContainer />}
      />
    </LayoutMain>
  );
};

TransactionsContainer.propTypes = {};

export default TransactionsContainer;
