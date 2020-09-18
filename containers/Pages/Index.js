import ChartJars from 'containers/ChartJars';
import Index from 'components/Pages/Index';
import Home from 'containers/Home';
import React from 'react';

const IndexContainer = () => {
  return (
    <Home>
      <Index componentBlock1={<ChartJars />} />
    </Home>
  );
};

export default IndexContainer;
