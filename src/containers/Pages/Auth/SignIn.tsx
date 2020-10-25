import bcrypt from 'bcryptjs';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import SignIn from 'src/components/Pages/Auth/SignIn';
import * as PATH from 'src/constant/path';
import * as TEXT from 'src/constant/text';
import Auth from 'src/containers/Pages/Auth/Auth';
import { delayLoading, toastCustom } from 'src/helpers/common';
import { hideLoadingUi, showLoadingUi } from 'src/redux/actions/ui.action';
import { loginUser } from 'src/redux/actions/user.action';
import { getUsers } from 'src/utils/firebase';
import * as Yup from 'yup';

const SignInContainer = (): JSX.Element => {
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
