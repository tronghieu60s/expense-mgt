import Home from 'src/components/pages/Home/Home';
import * as TEXT from 'src/constant/text';
import LayoutMain from 'src/containers/layout/Layout-Main';
import HomeBalances from 'src/containers/pages/Home/Balances/Home-Balances';
import ChartJarsContainer from 'src/containers/pages/Home/ChartJars/ChartJars';
import TransactionsHistory from 'src/containers/pages/Transactions/History/Transactions-History';
import React from 'react';
import BackupsContainer from './Backups/Backups';
import ReportChartContainer from '../Report/ReportChart';

const HomeContainer = () => {
  return (
    <LayoutMain title={TEXT.HOME}>
      <Home
        componentBlock1={<HomeBalances />}
        componentBlock2={<BackupsContainer />}
        componentBlock3={<ChartJarsContainer />}
        componentBlock4={<ReportChartContainer />}
        componentBlock5={<TransactionsHistory length={5} />}
      />
    </LayoutMain>
  );
};

export default HomeContainer;
