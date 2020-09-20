import Index from 'components/Pages';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import ChartJarsContainer from 'containers/Pages/Home/ChartJars';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import React from 'react';
import ReportContainer from './Report';

const IndexContainer = () => {
  return (
    <LayoutMain title={TEXT.HOME}>
      <Index
        componentBlock1={<HomeBalances />}
        componentBlock2={<TransactionsHistory length={3} />}
        componentBlock3={<ChartJarsContainer />}
        componentBlock4={<ReportContainer />}
      />
    </LayoutMain>
  );
};

export default IndexContainer;
