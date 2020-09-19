import Index from 'components/Pages';
import Home from 'containers/Pages/Home';
import ChartJars from 'containers/Pages/Home/ChartJars';
import React from 'react';

const IndexContainer = () => {
  return (
    <Home>
      <Index componentBlock1={<ChartJars />} />
    </Home>
  );
};

export default IndexContainer;
