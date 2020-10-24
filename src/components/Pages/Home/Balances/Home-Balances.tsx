import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import * as COLOR from 'src/constant/color';
import * as TEXT from 'src/constant/text';
import { formatMoneyLocal } from 'src/helpers/money';

interface Props {
  children: JSX.Element;
  totalIncome: number;
  totalExpense: number;
}

const HomeBalances: React.FC<Props> = (props) => {
  const { children, totalIncome, totalExpense } = props;
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
          // cutoutPercentage={0}
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
      <Col sm={12}>{children}</Col>
    </Row>
  );
};

export default HomeBalances;
