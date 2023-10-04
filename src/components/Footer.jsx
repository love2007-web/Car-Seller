import {React, useState} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Pagination from './Pagination';

const Footer = ({carData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const totalPages = 10;

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = carData.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <p className="text-gray-500 ml-4">
          Showing {startIndex + 1}-{Math.min(endIndex, carData.length)} of{" "}
          {carData.length} results
        </p>
      </div>
    </>
  );
}

export default Footer