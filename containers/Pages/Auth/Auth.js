import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import Layout from 'containers/Layout/Layout';
import Auth from 'components/Auth/Auth';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const AuthContainer = (props) => {
  return (
    <Layout title={props.title}>
      <Auth title={props.title} slogan={props.slogan}>
        {props.children}
      </Auth>
    </Layout>
  );
};

AuthContainer.propTypes = {
  slogan: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),

  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

AuthContainer.defaultProps = {
  slogan: '',
  title: '',
  user: {
    _id: '',
  },

  children: createElement('div'),
};

export default AuthContainer;
