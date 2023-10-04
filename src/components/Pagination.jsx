import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-1 ${
              currentPage === index + 1 ? "bg-blue-700" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2"
        >
          Next
        </button>
      </div>
    );
}

export default Pagination;