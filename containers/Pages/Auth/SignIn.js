import bcrypt from 'bcryptjs';
import SignIn from 'components/pages/Auth/SignIn';
import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Auth from 'containers/pages/Auth/Auth';
import { Formik } from 'formik';
import { delayLoading, toastCustom } from 'helpers/common';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { loginUser } from 'redux/actions/user.action';
import { getUsers } from 'utils/firebase';
import * as Yup from 'yup';

const SignInContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    password: '',
    remember: true,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    password: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
  });

  const handleUserLogin = async (users, values) => {
    const { password, username } = values;
    let user = null;
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].username === username) {
        const checkPass = bcrypt.compareSync(password, users[i].password);
        if (checkPass) user = users[i];
        break;
      }
    }
    return user;
  };

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    const users = await getUsers();
    const user = await handleUserLogin(users, values);
    if (user) {
      dispatch(loginUser(user, values.remember));
      router.push(PATH.HOME_PAGE);
    } else toastCustom('error', TEXT.USER_LOGIN_FAILED);

    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <Auth title={TEXT.LOGIN_TITLE} slogan={TEXT.LOGIN_SLOGAN}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <SignIn />
      </Formik>
    </Auth>
  );
};

SignInContainer.propTypes = {};

export default SignInContainer;
