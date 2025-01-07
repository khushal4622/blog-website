import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === currentPage ? "bg-orange-500 border-2 rounded w-5 flex items-center justify-center" : ""} key={pageNumber}>
        <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
      </li>
    ));
  };

  return (
    <ul className='pagination-container flex mt-5 mb-5'>
      <li>
        <button 
          className='cursor-pointer sm:text-sm text-base hover:text-blue-500' 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className='pagination-wrapper'>
        {renderPaginationLinks()}
      </div>
      <li>
        <button 
          className='cursor-pointer sm:text-sm text-base hover:text-blue-500' 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
