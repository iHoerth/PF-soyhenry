import PaginationMUI from '@mui/material/Pagination';

const Pagination = ({ page, maxPages, handlePageChange }) => {
  return (
    <>
      <PaginationMUI
        count={maxPages}
        onChange={handlePageChange}
        color="primary"
        sx={{ padding: '10px' }}
      />
    </>
  );
};

export default Pagination;
