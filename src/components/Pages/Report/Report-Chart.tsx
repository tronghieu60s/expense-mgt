import React from 'react';
import { Line } from 'react-chartjs-2';
import * as TEXT from 'src/constant/text';
import * as COLOR from 'src/constant/color';

interface Props {
  labelsDate: any;
  incomeData: any;
  expenseData: any;
}

const ReportChart: React.FC<Props> = (props) => {
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

export default ReportChart;
