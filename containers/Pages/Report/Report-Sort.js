import { objectJarsToArray } from 'common/jars';
import ReportSort from 'components/Pages/Report/Report-Sort';
import { JARS } from 'constant/common';
import * as TEXT from 'constant/text';
import { arrayUniqueValue, arrSortObjectDate } from 'helpers/array';
import PropTypes from 'prop-types';
import React from 'react';

const arrJarsName = objectJarsToArray(JARS);

const ReportSortContainer = (props) => {
  const { transactions } = props;
  const sortDate = arrSortObjectDate(transactions);
  const arrYear = sortDate.map((res) => new Date(res.date).getFullYear());
  const arrYearUnique = arrayUniqueValue(arrYear);

  const optionsSortYear = (arrYears) => {
    let result = null;
    result = arrYears.map((year) => {
      return { key: year, value: year };
    });
    return result;
  };

  const optionsSortJars = (arrJars) => {
    let result = null;
    result = arrJars.map((jar) => {
      return { key: jar.nameCode, value: jar.name };
    });
    result.unshift({ key: 'all', value: TEXT.ALL });
    return result;
  };

  return (
    <ReportSort
      optionsSortYear={optionsSortYear(arrYearUnique)}
      optionsSortJars={optionsSortJars(arrJarsName)}
      tabSort={props.tabSort}
      setTabSort={props.setTabSort}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    />
  );
};

ReportSortContainer.propTypes = {
  transactions: PropTypes.array,

  tabSort: PropTypes.string,
  setTabSort: PropTypes.func,
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};

ReportSortContainer.defaultProps = {
  transactions: [],

  tabSort: '',
  setTabSort: null,
  initialValues: {},
  validationSchema: {},
  onSubmit: null,
};

export default React.memo(ReportSortContainer);
