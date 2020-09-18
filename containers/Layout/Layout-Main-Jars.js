import { objectJarsToArray } from 'common/jars';
import LayoutMainJars from 'components/Layout/Layout-Main-Jars';
import LayoutMainJarsItem from 'components/Layout/Layout-Main-JarsItem';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const arrJarsName = objectJarsToArray(JARS);
const jarsName = arrJarsName.map((jar) => jar.name);
const jarsColor = arrJarsName.map((jar) => jar.color);

const LayoutMainJarsContainer = () => {
  const balance = useSelector((state) => state.user.balance);
  const { percent } = balance;
  const jarsValues = arrJarsName.map((jar) => percent[jar.nameCode]);

  const initialValues = { ...percent };
  const validationSchema = Yup.object().shape({
    necessities: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
    education: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
    saving: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
    play: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
    investment: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
    give: Yup.number()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .required(TEXT.FIELD_IS_REQUIRED)
      .min(0, TEXT.MIN_0_PERCENT)
      .max(100, TEXT.MAX_100_PERCENT),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const renderInputJarsItem = () => {
    let result = null;
    result = arrJarsName.map((jar) => {
      return <LayoutMainJarsItem key={jar.nameCode} jar={jar} />;
    });
    return result;
  };

  return (
    <LayoutMainJars
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      jarsName={jarsName}
      jarsColor={jarsColor}
      jarsValues={jarsValues}
    >
      {renderInputJarsItem()}
    </LayoutMainJars>
  );
};

LayoutMainJarsContainer.propTypes = {};

export default LayoutMainJarsContainer;
