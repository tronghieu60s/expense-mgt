import Index from 'components/Pages';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import ChartJars from 'containers/Pages/Home/ChartJars';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import React from 'react';

const IndexContainer = () => {
  return (
    <LayoutMain title={TEXT.HOME}>
      <Index
        componentBlock1={<HomeBalances />}
        componentBlock2={<TransactionsHistory />}
        componentBlock3={<ChartJars />}
        componentBlock4={<div />}
      />
    </LayoutMain>
  );
};

export default IndexContainer;
