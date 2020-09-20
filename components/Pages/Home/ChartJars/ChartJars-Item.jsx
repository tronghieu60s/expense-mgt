import { formatMoneyLocal } from 'helpers/money';
import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const ChartJarsItem = (props) => {
  const { jar, remain, percent } = props;

  return (
    <Col className="mb-3 mb-lg-0" xs={6} sm={4} md={2}>
      <Doughnut
        data={{
          labels: [jar.name, ''],
          datasets: [
            {
              backgroundColor: [jar.color, '#fff'],
              data: [percent || 1, 100 - percent],
              borderColor: [jar.color, jar.color],
              borderWidth: 1,
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
