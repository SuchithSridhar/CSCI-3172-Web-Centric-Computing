import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!task) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen px-4 bg-blue-100">
      <div className="max-w-md mx-auto text-center py-10">
        <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
        <form onSubmit={addTask} className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-2 border-gray-200 rounded-lg p-2 mr-2 flex-grow"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </form>
        <ul className="text-left list-disc list-inside">
          {tasks.map((task, index) => (
            <li key={index} className="bg-white mt-1 p-2 rounded shadow">{task}</li>
          ))}
        </ul>
        {tasks.length > 0 && (
          <button onClick={clearTasks} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Clear List
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
