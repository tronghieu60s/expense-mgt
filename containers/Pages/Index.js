import Index from 'components/Pages';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/Layout/Layout-Main';
import HomeBalances from 'containers/Pages/Home/Balances/Home-Balances';
import ChartJarsContainer from 'containers/Pages/Home/ChartJars';
import TransactionsHistory from 'containers/Pages/Transactions/History/Transactions-History';
import React from 'react';
import BackupsContainer from './Home/Backups';
import ReportChartContainer from './Report/ReportChart';

const IndexContainer = () => {
  return (
    <LayoutMain title={TEXT.HOME}>
      <Index
        componentBlock1={<HomeBalances />}
        componentBlock2={<BackupsContainer />}
        componentBlock3={<ChartJarsContainer />}
        componentBlock4={<ReportChartContainer />}
        componentBlock5={<TransactionsHistory length={5} />}
      />
    </LayoutMain>
  );
};

export default IndexContainer;
