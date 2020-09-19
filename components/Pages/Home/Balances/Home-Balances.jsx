import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import { formatMoneyLocal } from 'helpers/money';
import * as TEXT from 'constant/text';
import * as COLOR from 'constant/color';

const HomeBalances = (props) => {
  const { totalIncome, totalExpense } = props;
  const expensePercent = parseFloat(Number(totalExpense / (totalIncome / 100)).toFixed(2));
  const incomePercent = 100 - expensePercent;

  return (
    <Row>
      <Col sm={12}>
        <Doughnut
          data={{
            labels: [TEXT.INCOME, TEXT.EXPENSE],
            datasets: [
              {
                backgroundColor: [COLOR.INCOME_COLOR, COLOR.EXPENSE_COLOR],
                data: [incomePercent, expensePercent],
              },
            ],
          }}
          cutoutPercentage={0}
          options={{
            legend: {
              onClick: null,
            },
            plugins: {
              labels: {
                render: () => {
                  return '';
                },
              },
            },
          }}
        />
      </Col>
      <Col sm={12} className="mt-2 mb-3 text-center">
        <span className="text-12 text-uppercase">{TEXT.AVAILABLE_BALANCES}</span>
        <h2 className="mb-0 weight-700">
          {formatMoneyLocal(totalIncome - totalExpense)} <u>đ</u>
        </h2>
      </Col>
      <Col sm={12}>{props.children}</Col>
    </Row>
  );
};

HomeBalances.propTypes = {
  children: PropTypes.element,

  totalIncome: PropTypes.number,
  totalExpense: PropTypes.number,
};

HomeBalances.defaultProps = {
  children: createElement('div'),

  totalIncome: 0,
  totalExpense: 0,
};

export default HomeBalances;
