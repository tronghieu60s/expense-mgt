import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const ChartJarsAll = (props) => {
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

ChartJarsAll.propTypes = {
  jarsName: PropTypes.array,
  jarsColor: PropTypes.array,
  jarsValues: PropTypes.array,
};

ChartJarsAll.defaultProps = {
  jarsName: [],
  jarsColor: [],
  jarsValues: [],
};

export default ChartJarsAll;
