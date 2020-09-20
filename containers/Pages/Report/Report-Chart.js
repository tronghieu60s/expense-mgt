import React from 'react';
import PropTypes from 'prop-types';
import ReportChart from 'components/Pages/Report/Report-Chart';

const ReportChartContainer = (props) => {
  return <ReportChart />;
};

ReportChartContainer.propTypes = {};

export default React.memo(ReportChartContainer);
