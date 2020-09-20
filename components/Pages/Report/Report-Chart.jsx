import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import * as TEXT from 'constant/text';
import * as COLOR from 'constant/color';

const ReportChart = (props) => {
  const { labelsDate, incomeData, expenseData } = props;

  return (
    <Line
      data={{
        labels: labelsDate,
        datasets: [
          {
            data: incomeData,
            label: TEXT.INCOME,
            borderColor: COLOR.INCOME_COLOR,
            fill: false,
          },
          {
            data: expenseData,
            label: TEXT.EXPENSE,
            borderColor: COLOR.EXPENSE_COLOR,
            fill: false,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: `${TEXT.REPORT_REVENUE_EXPENDITURE} (VND)`,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      }}
    />
  );
};

ReportChart.propTypes = {
  labelsDate: PropTypes.array,
  incomeData: PropTypes.array,
  expenseData: PropTypes.array,
};

ReportChart.defaultProps = {
  labelsDate: [],
  incomeData: [],
  expenseData: [],
};

export default ReportChart;
