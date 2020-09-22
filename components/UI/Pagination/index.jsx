import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import getPagination from 'helpers/pagination';

const PaginationUI = (props) => {
  const { currentItem, totalItems, pageSize } = props;
  let currentPage = Math.floor(currentItem / pageSize);
  currentPage = currentItem % pageSize === 0 ? currentPage : currentPage + 1;

  const pagination = getPagination(totalItems, currentPage, pageSize);
  const { startPage, endPage, startIndex, endIndex } = pagination;

  const renderPaginationItem = (start, end, current, total) => {
    const result = [];
    for (let i = start + 1; i <= end; i += 1)
      if (i <= total)
        result.push(
          <Pagination.Item key={i} active={current === i}>
            {i}
          </Pagination.Item>,
        );
    return result;
  };

  return (
    <Pagination>
      {currentPage !== startPage && <Pagination.First />}
      {currentItem > 1 && <Pagination.Prev />}
      {renderPaginationItem(startIndex, endIndex, currentItem, totalItems)}
      {currentItem < totalItems && <Pagination.Next />}
      {currentPage !== endPage && <Pagination.Last />}
    </Pagination>
  );
};

PaginationUI.propTypes = {
  currentItem: PropTypes.number,
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
};

PaginationUI.defaultProps = {
  currentItem: 10,
  totalItems: 10,
  pageSize: 4,
};

export default PaginationUI;
