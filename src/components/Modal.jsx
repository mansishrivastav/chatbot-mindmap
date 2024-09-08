
import React from 'react';
import {RxCross2 } from '../utils/imports'
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
       <div className='flex items-center justify-between'>
       <h2 className="text-xl font-semibold mb-4">Add Data</h2>
       <button onClick={onClose}><RxCross2 /></button>
       </div>
        <hr className='w-full my-4'/>
       <div className="flex justify-around mb-4">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md font-medium">Text</button>
          <button className="px-3 py-1 bg-transparent border-2 border-blue-500 text-gray-700 rounded-md">PDF</button>
          <button className="px-3 py-1 bg-transparent border-2 border-blue-500 text-gray-700 rounded-md">EPUB</button>
          <button className="px-3 py-1 bg-transparent border-2 border-blue-500 text-gray-700 rounded-md">Link</button>
          <button className="px-3 py-1 bg-transparent border-2 border-blue-500 text-gray-700 rounded-md">CSV</button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
              Read More/Source Link
            </label>
            <input
              type="text"
              id="link"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter link"
            />
          </div>
          <hr className='w-full my-4'/>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={onClose}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Modal;
