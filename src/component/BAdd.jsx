import React from 'react';

const BAdd = ({ handleAddTask }) => {
  return (
    <button
      onClick={handleAddTask}
      className="text-white bg-blue-800 mt-6 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      ADD
    </button>
  );
};

export default BAdd;
