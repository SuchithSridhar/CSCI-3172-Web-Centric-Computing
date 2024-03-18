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
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <div className="max-w-md mx-auto text-center py-10 flex-grow">
        <h1 className="text-4xl pb-4 font-bold mb-4">CSCI 3172 Lab 6</h1>
        <h2 className="text-3xl font-bold mb-4">To-Do List</h2>
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
      <footer className="py-4 bg-blue-200 text-center">
        <p className="text-sm text-gray-700">CSCI-3172 Web Centric Computing</p>
        <p className="text-sm text-gray-700">Author: Suchith Sridhar Khajjayam</p>
        <p className="text-sm text-gray-700">Student ID: B00932400</p>
      </footer>
    </div>
  );
}

export default App;

