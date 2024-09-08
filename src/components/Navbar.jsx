import React from 'react';
import{IoChevronDownOutline, RxHamburgerMenu } from '../utils/imports'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="md:ml-16 flex items-center bg-white px-4  border-b">
      <button onClick={toggleSidebar} className="mr-4 md:hidden">
        <RxHamburgerMenu size={24} />
      </button>
      <div className="flex-1">
        <h1 className="text-xl font-bold py-2">Chatbot Mind Map</h1>
        <p className="text-gray-600 text-xs py-2 hidden md:block">
          This is the brain and the memory of the chatbot. You can add, edit and analyze
          the source data being used to answer user queries from here.
        </p>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="border-2 border-blue-500 text-blue-600 px-2 py-1 md:px-3 md:py-1.5 rounded-md text-xs md:text-sm font-medium hidden sm:block">
          GUIDED TOUR
        </button>
        <p className="flex items-center space-x-1 text-gray-700 px-2 py-1.5 rounded-md text-sm font-medium">
          <span className="hidden md:inline">SELECT ORG</span>
          <IoChevronDownOutline size={16} color="blue"/>
        </p>
        <img
          src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com"
          alt="User avatar"
          className="w-8 h-8 rounded-full border-2 border-blue-500"
        />
      </div>
    </div>
  );
};

export default Navbar;
