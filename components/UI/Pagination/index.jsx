import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PaginationUI = (props) => {
  const { pagination } = props;

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

PaginationUI.propTypes = {
  pagination: PropTypes.shape({
    totalItems: PropTypes.number,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalPages: PropTypes.number,
    startPage: PropTypes.number,
    endPage: PropTypes.number,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
  }),
};

PaginationUI.defaultProps = {
  pagination: {
    totalItems: 0,
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    startPage: 0,
    endPage: 0,
    startIndex: 0,
    endIndex: 0,
  },
};

export default PaginationUI;
