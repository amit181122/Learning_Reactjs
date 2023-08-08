import React from 'react';

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
          <span>{task.text}</span>
          <div className="button-group">
            <button onClick={() => onComplete(index)}>Complete</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

