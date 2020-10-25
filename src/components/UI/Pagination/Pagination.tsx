import getPagination from 'src/helpers/pagination';
import { useRouter } from 'next/router';
import React from 'react';
import { Pagination } from 'react-bootstrap';

interface Props {
  numberPage?: number;
  pagination: {
    currentPage: number;
    startIndex: number;
    endIndex: number;
    startPage: number;
    endPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

const PaginationUI: React.FC<Props> = (props) => {
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
            query: { page: parseInt(page as string, 10) - 1 },
          });
        }}
      />
      {renderPaginationItem()}
      <Pagination.Next
        disabled={currentPage >= totalPages}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { page: parseInt(page as string, 10) + 1 },
          });
        }}
      />
    </Pagination>
  );
};

PaginationUI.defaultProps = {
  numberPage: 3,
};

export default React.memo(PaginationUI);
