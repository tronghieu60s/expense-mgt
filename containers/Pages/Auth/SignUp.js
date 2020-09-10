import SignUp from 'components/Auth/SignUp';
import * as TEXT from 'constant/text';
import { Formik } from 'formik';
import { delay } from 'helpers/common';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import Auth from 'containers/Pages/Auth/Auth';

const SignUpContainer = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(TEXT.INVALID_EMAIL).required(TEXT.FIELD_IS_REQUIRED),
    username: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
    password: Yup.string().required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());
    console.log(values);
    await delay(1000);
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
