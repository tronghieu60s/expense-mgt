import { optionsJars } from 'src/common';
import ReportSort from 'src/components/Pages/Report/Report-Sort';
import { arrayUniqueValue, arrSortObjectDate } from 'src/helpers/array';
import React from 'react';

interface Props {
  transactions: any;
  tabSort: string;
  setTabSort: any;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}

const ReportSortContainer: React.FC<Props> = (props) => {
  const { transactions, tabSort, setTabSort, initialValues, validationSchema, onSubmit } = props;
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
      tabSort={tabSort}
      setTabSort={setTabSort}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(ReportSortContainer);
