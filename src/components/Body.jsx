import React, { useState } from 'react';
import {FaTrash, FaEdit } from '../utils/imports'
import { tableData } from '../utils/constants';

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const currentTableData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="md:ml-16 flex flex-col p-4 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto bg-white border rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-700 text-lg tracking-wider">
            <tr>
              <th className="p-3">Data</th>
              <th className="p-3 hidden md:table-cell">Source</th>
              <th className="p-3 hidden md:table-cell">Type</th>
              <th className="p-3 hidden md:table-cell">Created</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">
                  <div className="flex flex-col items-start">
                    <span className="text-sm md:text-lg">{item.text}</span>
                    <button className="text-blue-500 text-xs md:text-sm font-semibold mt-2">SHOW MORE</button>
                  </div>
                </td>
                <td className="p-3 hidden md:table-cell">--</td>
                <td className="p-3 hidden md:table-cell">{item.type}</td>
                <td className="p-3 hidden md:table-cell">{item.created}</td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button className="text-blue-500">
                      <FaEdit />
                    </button>
                    <button className="text-pink-600">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full disabled:opacity-50 text-sm"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-full text-sm ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full disabled:opacity-50 text-sm"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Body;
