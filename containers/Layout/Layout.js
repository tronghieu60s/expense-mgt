import Layout from 'components/layout/Layout';
import Loading from 'components/UI/Loading/Loading';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { useSelector } from 'react-redux';

const LayoutContainer = (props) => {
  const loading = useSelector((state) => state.ui.loading);

  return (
    <>
      {loading ? <Loading /> : null}
      <Layout title={props.title}>{props.children}</Layout>
    </>
  );
};

LayoutContainer.propTypes = {
  title: PropTypes.string,

  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LayoutContainer.defaultProps = {
  title: '',

  children: createElement('div'),
};

export default LayoutContainer;
