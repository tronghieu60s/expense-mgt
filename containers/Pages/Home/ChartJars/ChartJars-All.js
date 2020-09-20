import React from 'react';
import ChartJarsAll from 'components/Pages/Home/ChartJars/ChartJars-All';
import { JARS } from 'constant/common';
import { objectJarsToArray } from 'common/jars';
import { useSelector } from 'react-redux';

const arrJarsName = objectJarsToArray(JARS);
const jarsName = arrJarsName.map((jar) => jar.name);
const jarsColor = arrJarsName.map((jar) => jar.color);

const ChartJarsAllContainer = () => {
  const balance = useSelector((state) => state.user.balance);
  const { income, expense } = balance;
  const jarsValues = arrJarsName.map((jar) => income[jar.nameCode] - expense[jar.nameCode]);

  return <ChartJarsAll jarsName={jarsName} jarsColor={jarsColor} jarsValues={jarsValues} />;
};

ChartJarsAllContainer.propTypes = {};

export default React.memo(ChartJarsAllContainer);
