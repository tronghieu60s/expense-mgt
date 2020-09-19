import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';

const Index = (props) => {
  return (
    <>
      <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
        {props.componentBlock1}
      </div>
      <Row>
        <Col md={6} lg={9}>
          <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
            <Line
              data={{
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [
                  {
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: 'Africa',
                    borderColor: '#3e95cd',
                    fill: false,
                  },
                  {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: 'Asia',
                    borderColor: '#8e5ea2',
                    fill: false,
                  },
                  {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: 'Europe',
                    borderColor: '#3cba9f',
                    fill: false,
                  },
                  {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: 'Latin America',
                    borderColor: '#e8c3b9',
                    fill: false,
                  },
                  {
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: 'North America',
                    borderColor: '#c45850',
                    fill: false,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'World population per region (in millions)',
                },
                legend: {
                  display: true,
                  position: 'bottom',
                },
              }}
            />
            <Link href={PATH.HISTORY_PAGE}>
              <button type="button" className="btn btn-primary btn-block btn-sm mt-2">
                {TEXT.SEE_MORE} <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
            <Bar
              data={{
                labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                datasets: [
                  {
                    label: 'Population (millions)',
                    backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
                    data: [2478, 5267, 734, 784, 433],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Predicted world population (millions) in 2050',
                },
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

Index.propTypes = {
  componentBlock1: PropTypes.element,
};

Index.defaultProps = {
  componentBlock1: createElement('div'),
};

export default Index;
