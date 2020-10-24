import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutMain from 'src/components/layout/Layout-Main';
import Loading from 'src/components/UI/Loading/Loading';
import * as PATH from 'src/constant/path';
import * as STORAGE from 'src/constant/storage';
import * as TEXT from 'src/constant/text';
import Layout from 'src/containers/Layout/Layout';
import { delayLoading } from 'src/helpers/common';
import { setTransactions } from 'src/redux/actions/transactions.action';
import { hideLoadingUi, showLoadingUi } from 'src/redux/actions/ui.action';
import { logoutUser, setUser } from 'src/redux/actions/user.action';
import { getTransactions, getUser } from 'src/utils/firebase';
import FooterContainer from './Layout-Main-Footer';
import LayoutMainJarsContainer from './Layout-Main-Jars';
import LayoutMainSettingContainer from './Layout-Main-Setting';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

interface Props {
  title: string;
  children: JSX.Element;
}

const LayoutMainContainer: React.FC<Props> = (props) => {
  const { title, children } = props;
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
              if (user._id)
                getTransactions(user._id).then((transaction) => {
                  dispatch(setTransactions(transaction));
                });
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
        componentJars={<LayoutMainJarsContainer />}
        componentSetting={<LayoutMainSettingContainer />}
        componentFooter={<FooterContainer />}
      >
        {children}
      </LayoutMain>
    </Layout>
  );
};

export default React.memo(LayoutMainContainer);
