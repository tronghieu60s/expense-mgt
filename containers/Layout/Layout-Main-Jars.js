import { objectJarsToArray } from 'common/jars';
import LayoutMainJars from 'components/Layout/Layout-Main-Jars';
import LayoutMainJarsItem from 'components/Layout/Layout-Main-JarsItem';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import { objectTotalValues } from 'helpers/object';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const arrJarsName = objectJarsToArray(JARS);
const jarsName = arrJarsName.map((jar) => jar.name);
const jarsColor = arrJarsName.map((jar) => jar.color);

const LayoutMainJarsContainer = () => {
  const balance = useSelector((state) => state.user.balance);
  const { percent } = balance;

  const [initialInputValues, setInitialInputValues] = useState(percent);
  const totalPercent = objectTotalValues(initialInputValues);
  const jarsValues = arrJarsName.map((jar) => percent[jar.nameCode]);

  const initialValues = { ...percent };
  const validationSchema = () => {
    const schema = {};
    for (const key in percent)
      if (percent.hasOwnProperty(key))
        schema[key] = Yup.number()
          .typeError(TEXT.FIELD_NOT_MATCHES)
          .required(TEXT.FIELD_IS_REQUIRED);
    return Yup.object().shape(schema);
  };

  const handleChange = (name, value) => {
    setInitialInputValues({
      ...initialInputValues,
      [name]: value || 0,
    });
  };

  const renderInputJarsItem = () => {
    let result = null;
    result = arrJarsName.map((jar) => {
      return <LayoutMainJarsItem key={jar.nameCode} jar={jar} handleChange={handleChange} />;
    });
    return result;
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <LayoutMainJars
      initialValues={initialValues}
      validationSchema={validationSchema()}
      onSubmit={onSubmit}
      jarsName={jarsName}
      jarsColor={jarsColor}
      jarsValues={jarsValues}
      totalPercent={totalPercent}
    >
      {renderInputJarsItem()}
    </LayoutMainJars>
  );
};

LayoutMainJarsContainer.propTypes = {};

export default React.memo(LayoutMainJarsContainer);
