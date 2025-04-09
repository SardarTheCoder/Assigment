import React from 'react';

const List = ({ tasks }) => {
  return (
    <ul className="bg-black mt-6 space-y-2 p-4 rounded-lg">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center bg-gray-600 rounded-lg p-2 space-x-2"
        >
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="text-sm font-medium text-white"
          >
            {task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default List;
