import React from 'react';
import Index from 'components/pages/Index';
import HomeJars from 'containers/includes/Home-Jars';
import HomeListJars from 'containers/includes/Home-ListJars';
import Report from 'containers/includes/Report-Element';

const IndexContainer = () => {
  return (
    <Index
      componentBlock1={<HomeJars />}
      componentBlock2={<Report />}
      componentBlock3={<HomeListJars />}
    />
  );
};

export default IndexContainer;
