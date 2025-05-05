import React from 'react';

const ToDoItem = ({ text, onRemove }) => {
  return (
    <li className="task-item">
      <span className="task-text">{text}</span>
      <button onClick={onRemove} className="remove-button">Remove</button>
    </li>
  );
};

export default ToDoItem;
