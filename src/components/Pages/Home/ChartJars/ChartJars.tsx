import React from 'react';
import { Row } from 'react-bootstrap';

interface Props {
  children: any;
}

const ChartJars: React.FC<Props> = (props) => {
  const { children } = props;
  return <Row>{children}</Row>;
};

export default ChartJars;
