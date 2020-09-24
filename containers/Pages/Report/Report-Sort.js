import { optionsJars } from 'common';
import ReportSort from 'components/pages/Report/Report-Sort';
import { arrayUniqueValue, arrSortObjectDate } from 'helpers/array';
import PropTypes from 'prop-types';
import React from 'react';

const ReportSortContainer = (props) => {
  const { transactions } = props;
  const sortDate = arrSortObjectDate(transactions);
  const arrYear = sortDate.map((res) => new Date(res.date).getFullYear());
  const arrYearUnique = arrayUniqueValue(arrYear);

  const optionSortMonth = () => {
    const result = [];
    for (let i = 1; i <= 12; i += 1) result.push({ key: i, value: `T${i}` });
    return result;
  };

  const optionsSortYear = (arrYears) => {
    let result = null;
    result = arrYears.map((year) => {
      return { key: year, value: year };
    });
    return result;
  };

  return (
    <ReportSort
      optionSortMonth={optionSortMonth()}
      optionsSortYear={optionsSortYear(arrYearUnique)}
      optionsSortJars={optionsJars()}
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
