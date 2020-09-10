import SignIn from 'components/Auth/SignIn';
import * as TEXT from 'constant/text';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Auth from './Auth';

const SignInContainer = (props) => {
  const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
    remember: true,
  };

  return (
    <Auth title={TEXT.LOGIN_TITLE} slogan={TEXT.LOGIN_SLOGAN}>
      <Formik initialValues={initialValues}>
        {(formikProps) => <SignIn formikProps={formikProps} />}
      </Formik>
    </Auth>
  );
};

SignInContainer.propTypes = {};

export default SignInContainer;
