import React, { useState } from 'react'

const Inputfeild = () => {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleAddTask = () => {
      setTasks([...tasks,taskInput]);
      setTaskInput(''); 
    };
  
   console.log(tasks,"tasks........................................")
  
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
            className="shadow-xs mt-10"
          />
        </div>
  
        
        <button
          onClick={handleAddTask}
          className="text-white bg-blue-800 mt-6 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </button>
  
      <div className='bg-black mt-6'>

          {tasks.map(task => (
            <li>
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "/>
                  <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{task}</label>
              
                 
               

            </li>
          ))}
          </div>
      </div>
  )
}

export default Inputfeild