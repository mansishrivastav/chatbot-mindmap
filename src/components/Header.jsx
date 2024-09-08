import React, { useState } from 'react';
import { headerButtons } from '../utils/constants';
import {IoChevronDownOutline, Modal} from '../utils/imports'

const Header = () => {
  const [results, setResults] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const optionsArray = [1,2,3,4,5,6,7,8,9,10,20,50];

  const handleButtonClick = (label) => {
    if (label === "ADD DATA") {  
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col w-full p-4'>
      <div className="flex flex-wrap items-center justify-center my-2 gap-2">
        {headerButtons.map((button) => (
          <button
            key={button.id}
            className={`${button.bgColor} ${button.textColor} ${button.hoverColor || ''} ${button.hoverBgColor || ''} ${button.borderColor || ''} ${button.hoverTextColor || ''} flex justify-center gap-x-2 items-center py-2 px-3 rounded-lg shadow transition duration-300 text-xs md:text-sm`}
            onClick={() => handleButtonClick(button.label)}
          >
            <button.icon />
            {button.label}
          </button>
        ))}
      </div>
      <hr className='w-3/4 mx-auto my-4'/>
      <div className='flex flex-wrap items-center justify-center my-2 gap-2'>
        <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-2 py-1 w-full md:w-40 text-sm"
          />
        </div>
        
        <div className="relative inline-block">
          <select
            id="results"
            value={results}
            onChange={(e) => setResults(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 text-gray-700 py-1 pl-2 pr-6 rounded leading-tight focus:outline-none focus:border-gray-500 text-sm"
          >
            {optionsArray.map((optionValue) => (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <IoChevronDownOutline size={16} />
          </div>
        </div>
        
        <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 font-medium text-sm">
          SEARCH
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Header;
