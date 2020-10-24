import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
  jarsName: any;
  jarsColor: any;
  jarsValues: any;
}

const ChartJarsAll: React.FC<Props> = (props) => {
  const { jarsName, jarsColor, jarsValues } = props;

  return (
    <Doughnut
      data={{
        labels: jarsName,
        datasets: [
          {
            backgroundColor: jarsColor,
            data: jarsValues,
          },
        ],
      }}
      options={{
        legend: {
          position: 'left',
        },
      }}
    />
  );
};

export default ChartJarsAll;
