import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoApp.css';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setTasks([...tasks, inputValue.trim()]);
    setInputValue('');
  };

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-container">
      <h1 className="header">Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input"
          placeholder="Add a task"
        />
        <button type="submit" className="add-button">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p className="no-items">No Items Added</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <ToDoItem
              key={index}
              text={task}
              onRemove={() => handleRemoveTask(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoApp;

