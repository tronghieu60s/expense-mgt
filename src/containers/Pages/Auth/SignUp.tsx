import bcrypt from 'bcryptjs';
import SignUp from 'src/components/Pages/Auth/SignUp';
import * as PATH from 'src/constant/path';
import * as TEXT from 'src/constant/text';
import Auth from 'src/containers/Pages/Auth/Auth';
import { Formik } from 'formik';
import { delayLoading, toastCustom } from 'src/helpers/common';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'src/redux/actions/ui.action';
import { getUsers, newUser } from 'src/utils/firebase';
import * as Yup from 'yup';

const SignUpContainer = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .email(TEXT.INVALID_EMAIL)
      .required(TEXT.FIELD_IS_REQUIRED),
    username: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .matches(/^[A-za-z]{1}[A-Za-z0-9]{4,}$/, TEXT.USERNAME_NOT_MATCH)
      .required(TEXT.FIELD_IS_REQUIRED),
    password: Yup.string()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .matches(/^[A-Za-z0-9]{6,}$/, TEXT.PASSWORD_NOT_MATCH)
      .required(TEXT.FIELD_IS_REQUIRED),
  });

  const checkUserNotExist = (users, values) => {
    const { username, email } = values;
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].username === username) {
        toastCustom('error', TEXT.USER_USERNAME_EXISTS);
        return false;
      }
      if (users[i].email === email) {
        toastCustom('error', TEXT.USER_EMAIL_EXISTS);
        return false;
      }
    }
    return true;
  };

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    const users = await getUsers();
    const checkUser = checkUserNotExist(users, values);
    if (checkUser) {
      const hashPass = bcrypt.hashSync(values.password, 12);
      const userResult = await newUser({ ...values, password: hashPass });
      if (userResult) {
        await toastCustom('success', TEXT.USER_NEW_SUCCESS);
        router.push(PATH.LOGIN_PAGE);
      }
    }

    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <Auth title={TEXT.REGISTER_TITLE} slogan={TEXT.REGISTER_SLOGAN}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <SignUp />
      </Formik>
    </Auth>
  );
};

SignUpContainer.propTypes = {};

export default SignUpContainer;
