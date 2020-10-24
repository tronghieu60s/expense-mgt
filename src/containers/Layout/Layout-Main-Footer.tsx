import Footer from 'src/components/layout/Layout-Main-Footer';
import { version } from 'package.json';
import React from 'react';

const FooterContainer = (): JSX.Element => (
  <Footer version={version} year={new Date().getFullYear()} />
);

export default FooterContainer;
