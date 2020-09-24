import getPagination from 'helpers/pagination';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationUI = (props) => {
  const router = useRouter();
  const page = router.query.page || 1;
  const { pagination, numberPage } = props;
  const { currentPage, endPage, totalPages } = pagination;
  const paginationPage = getPagination(
    endPage / numberPage,
    Math.ceil(currentPage / numberPage),
    numberPage,
  );
  const { startIndex, endIndex } = paginationPage;

  const renderPaginationItem = () => {
    const result = [];
    for (let i = startIndex + 1; i <= endIndex; i += 1)
      if (i <= endPage)
        result.push(
          <Pagination.Item
            key={i}
            active={currentPage === i}
            onClick={() => {
              router.push({
                pathname: router.pathname,
                query: { page: i },
              });
            }}
          >
            {i}
          </Pagination.Item>,
        );
    return result;
  };

  return (
    <Pagination className="mb-0">
      <Pagination.Prev
        disabled={currentPage <= 1}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { page: parseInt(page, 10) - 1 },
          });
        }}
      />
      {renderPaginationItem()}
      <Pagination.Next
        disabled={currentPage >= totalPages}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { page: parseInt(page, 10) + 1 },
          });
        }}
      />
    </Pagination>
  );
};

PaginationUI.propTypes = {
  numberPage: PropTypes.number,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    startPage: PropTypes.number,
    endPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalItems: PropTypes.number,
    totalPages: PropTypes.number,
  }),
};

PaginationUI.defaultProps = {
  numberPage: 3,
  pagination: {
    currentPage: 0,
    startIndex: 0,
    endIndex: 0,
    startPage: 0,
    endPage: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
  },
};

export default React.memo(PaginationUI);
