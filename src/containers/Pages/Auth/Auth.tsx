import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Auth from 'src/components/pages/Auth/Auth';
import * as PATH from 'src/constant/path';
import * as STORAGE from 'src/constant/storage';
import Layout from 'src/containers/Layout/Layout';
import { logoutUser } from 'src/redux/actions/user.action';
import { getUser } from 'src/utils/firebase';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

interface Props {
  title: string;
  slogan: string;
  children: JSX.Element;
}

const AuthContainer: React.FC<Props> = (props): JSX.Element => {
  const { title, slogan, children } = props;
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
    <Layout title={title}>
      <Auth title={title} slogan={slogan}>
        {children}
      </Auth>
    </Layout>
  );
};

export default AuthContainer;
