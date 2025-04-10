import React, { useState } from 'react';
import List from './component/List';
import BAdd from './component/BAdd';

const Inputfeild = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto gap-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Please enter a task
        </label>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <BAdd handleAddTask={handleAddTask} />
      <List tasks={tasks} />
    </div>
  );
};

export default Inputfeild;
