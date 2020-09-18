import Footer from 'components/Layout/Layout-Main-Footer';
import { version } from 'package.json';
import React from 'react';

const FooterContainer = () => {
  return <Footer version={version} year={new Date().getFullYear()} />;
};

export default FooterContainer;
