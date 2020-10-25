import React from 'react';
import Home from 'src/components/Pages/Home/Home';
import * as TEXT from 'src/constant/text';
import LayoutMain from 'src/containers/Layout/Layout-Main';
import HomeBalances from 'src/containers/Pages/Home/Balances/Home-Balances';
import ChartJarsContainer from 'src/containers/Pages/Home/ChartJars/ChartJars';
import TransactionsHistory from 'src/containers/Pages/Transactions/History/Transactions-History';
import ReportChartContainer from '../Report/ReportChart';
import BackupsContainer from './Backups/Backups';

const HomeContainer = (): JSX.Element => {
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
