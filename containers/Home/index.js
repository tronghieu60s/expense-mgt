import Home from 'components/Home';
import LayoutMain from 'containers/Layout/LayoutMain';
import TransactionsHistory from 'containers/Transactions/History/Transactions-History';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import HomeBalances from './Balances/Home-Balances';

const HomeContainer = (props) => {
  const { title } = props;

  return (
    <LayoutMain title={title}>
      <Home componentBlock1={<HomeBalances />} componentBlock2={<TransactionsHistory />}>
        {props.children}
      </Home>
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
