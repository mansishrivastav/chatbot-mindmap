
import React from 'react';
import { sidebar } from '../utils/constants';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";


const Sidebar = ({ isOpen, setIsOpen }) => {


  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white border-r shadow-sm transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-0 md:w-16'
      }`}
    >
      <div className="flex justify-end p-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-gray-600 hover:bg-gray-100 p-2 rounded-full ${isOpen ? '' : 'hidden'}`}
        >
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="hidden md:flex justify-end p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:bg-gray-100 p-2 rounded-full"
        >
          {isOpen ? <MdArrowForwardIos /> : <RxHamburgerMenu />}
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden md:block'}`}>
        <ul className="space-y-2">
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                to={item.path}
                className={`flex items-center px-4 py-3 hover:bg-gray-100 ${
                  location.pathname === item.path ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                }`}
              >
                <item.icon className={`text-xl ${isOpen ? 'mr-3' : ''}`} />
                {isOpen && <span className="whitespace-nowrap text-sm">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;