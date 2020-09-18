import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Col } from 'react-bootstrap';
import { formatMoneyLocal } from 'helpers/money';

const ChartJarsItem = (props) => {
  const { jar, remain, percent } = props;

  return (
    <Col className="mb-3 mb-lg-0" xs={6} sm={4} lg={2}>
      <Doughnut
        data={{
          labels: [jar.name, ''],
          datasets: [
            {
              backgroundColor: [jar.color, '#fff'],
              data: [percent || 1, 100 - percent],
            },
          ],
        }}
        options={{
          legend: false,
          tooltips: false,
          hover: false,
        }}
      />
      <div className="text-12 text-center weight-700">
        <div className="text-uppercase mt-3">{jar.name}</div>
        <div>{formatMoneyLocal(remain)} đ</div>
      </div>
    </Col>
  );
};

ChartJarsItem.propTypes = {
  remain: PropTypes.number,
  percent: PropTypes.number,

  jar: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
};

ChartJarsItem.defaultProps = {
  remain: 0,
  percent: 0,

  jar: {
    name: '',
    color: '',
  },
};

export default ChartJarsItem;