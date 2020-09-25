import Index from 'components/pages/PageIndex';
import * as TEXT from 'constant/text';
import LayoutMain from 'containers/layout/Layout-Main';
import HomeBalances from 'containers/pages/Home/Balances/Home-Balances';
import ChartJarsContainer from 'containers/pages/Home/ChartJars/ChartJars';
import TransactionsHistory from 'containers/pages/Transactions/History/Transactions-History';
import React from 'react';
import BackupsContainer from './Home/Backups/Backups';
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