const getPagination = (totalItems, currentPage = 1, pageSize = 10) => {
  // calculate total pages
  const totalPages = Math.ceil(totalItems / pageSize);

  let startPage;
  let endPage;
  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 6) {
    // more than 10 total pages so calculate start and end pages
    startPage = 1;
    endPage = 10;
  } else if (currentPage + 4 >= totalPages) {
    startPage = totalPages - 9;
    endPage = totalPages;
  } else {
    startPage = currentPage - 5;
    endPage = currentPage + 4;
  }

  // calculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
  };
};

export default getPagination;
