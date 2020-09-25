import Auth from 'components/pages/Auth/Auth';
import * as PATH from 'constant/path';
import * as STORAGE from 'constant/storage';
import Layout from 'containers/layout/Layout';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { createElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/actions/user.action';
import { getUser } from 'utils/firebase';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const AuthContainer = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const storage =
      JSON.parse(localStorage.getItem(STORAGE.STORAGE_USER)) ||
      JSON.parse(sessionStorage.getItem(STORAGE.STORAGE_USER)) ||
      null;
    if (storage) {
      jwt.verify(storage, PRIVATE_KEY, (err, decoded) => {
        if (err) dispatch(logoutUser());
        if (decoded)
          getUser(decoded).then((user) => {
            if (user) router.push(PATH.HOME_PAGE);
          });
      });
    }
  }, []);

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

  children: PropTypes.element,
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
