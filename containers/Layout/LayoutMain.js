import LayoutMain from 'components/Layout/LayoutMain';
import Loading from 'components/UI/Loading';
import * as PATH from 'constant/path';
import * as STORAGE from 'constant/storage';
import * as TEXT from 'constant/text';
import Layout from 'containers/Layout';
import { delayLoading } from 'helpers/common';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { createElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { logoutUser, setUser } from 'redux/actions/user.action';
import { getUser } from 'utils/firebase';
import LayoutMainSettingContainer from './LayoutMainSetting';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const LayoutMainContainer = (props) => {
  const { title } = props;
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const storage =
      JSON.parse(localStorage.getItem(STORAGE.STORAGE_USER)) ||
      JSON.parse(sessionStorage.getItem(STORAGE.STORAGE_USER)) ||
      null;
    if (storage) {
      jwt.verify(storage, PRIVATE_KEY, (err, decoded) => {
        if (err) router.push(PATH.LOGIN_PAGE);
        if (decoded)
          getUser(decoded).then((value) => {
            if (value) {
              dispatch(setUser(value));
              // getTransactions(user._id).then((transaction) => {
              //   props.setTransactions(transaction);
              // });
            } else router.push(PATH.LOGIN_PAGE);
          });
      });
    } else router.push(PATH.LOGIN_PAGE);
  }, [user._id]);

  const handleLogout = async () => {
    dispatch(showLoadingUi());
    dispatch(logoutUser());
    router.push(PATH.LOGIN_PAGE);
    await delayLoading();
    dispatch(hideLoadingUi());
  };

  if (!user._id)
    return (
      <Layout title={TEXT.LOADING_TEXT}>
        <Loading />
      </Layout>
    );
  return (
    <Layout title={title}>
      <LayoutMain
        user={user}
        pathname={pathname}
        handleLogout={handleLogout}
        componentSetting={<LayoutMainSettingContainer />}
      >
        {props.children}
      </LayoutMain>
    </Layout>
  );
};

LayoutMainContainer.propTypes = {
  title: PropTypes.string,

  children: PropTypes.element,
};

LayoutMainContainer.defaultProps = {
  title: '',

  children: createElement('div'),
};

export default React.memo(LayoutMainContainer);
