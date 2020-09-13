import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import LayoutMain from 'containers/Layout/LayoutMain';
import Home from 'components/Home';
import HomeBalances from './Balances/Home-Balances';

const HomeContainer = (props) => {
  const { title } = props;

  return (
    <LayoutMain title={title}>
      <Home componentBlock1={<HomeBalances />}>{props.children}</Home>
    </LayoutMain>
  );
};

HomeContainer.propTypes = {
  title: PropTypes.string,

  children: PropTypes.element,
};

HomeContainer.defaultProps = {
  title: '',

  children: createElement('div'),
};

export default HomeContainer;
