import bcrypt from 'bcryptjs';
import SignUp from 'components/Auth/SignUp';
import * as ALERT from 'constant/alert';
import * as TEXT from 'constant/text';
import Auth from 'containers/Pages/Auth/Auth';
import { Formik } from 'formik';
import { delayLoading, toastCustom } from 'helpers/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { getUsers, newUser } from 'utils/firebase';
import * as Yup from 'yup';

const SignUpContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(TEXT.INVALID_EMAIL).required(TEXT.FIELD_IS_REQUIRED),
    username: Yup.string()
      .matches(/^[A-za-z]{1}[A-Za-z0-9]{4,}$/, TEXT.USERNAME_NOT_MATCH)
      .required(TEXT.FIELD_IS_REQUIRED),
    password: Yup.string()
      .matches(/^[A-Za-z0-9]{6,}$/, TEXT.PASSWORD_NOT_MATCH)
      .required(TEXT.FIELD_IS_REQUIRED),
  });

  const checkUserNotExist = (users, values) => {
    const { username, email } = values;
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].username === username) {
        toastCustom('error', ALERT.USER_USERNAME_EXISTS);
        return false;
      }
      if (users[i].email === email) {
        toastCustom('error', ALERT.USER_EMAIL_EXISTS);
        return false;
      }
    }
    return true;
  };

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());
    const users = await getUsers();
    const checkUser = await checkUserNotExist(users, values);
    if (checkUser) {
      const hashPass = bcrypt.hashSync(values.password, 12);
      newUser({ ...values, password: hashPass }).then((res) => {
        if (res) toastCustom('success', ALERT.USER_NEW_SUCCESS);
      });
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
