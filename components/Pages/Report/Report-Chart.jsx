import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import * as TEXT from 'constant/text';
import * as COLOR from 'constant/color';

const ReportChart = (props) => {
  return (
    <Line
      data={{
        labels: ['20/12/2001', '21/12/2001', '22/12/2001'],
        datasets: [
          {
            data: [86, 114, 106],
            label: TEXT.INCOME,
            borderColor: COLOR.INCOME_COLOR,
            fill: false,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: TEXT.EXPENSE,
            borderColor: COLOR.EXPENSE_COLOR,
            fill: false,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: 'bottom',
        },
      }}
    />
  );
};

ReportChart.propTypes = {};

export default ReportChart;
