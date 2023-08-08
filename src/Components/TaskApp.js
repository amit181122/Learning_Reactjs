import React, { useState, useCallback, useMemo } from 'react';
import TaskList from './TaskList';
import './TaskApp.css';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Adding a new task
  const handleDeleteTask = useCallback(
    (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    },
    [tasks]
  );

   // Completing or uncompleting a task
  const handleCompleteTask = useCallback(
    (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    },
    [tasks]
  );

  //memoised
  const taskList = useMemo(() => <TaskList tasks={tasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />, [tasks, handleDeleteTask, handleCompleteTask]);
//   console.log(">>>>>>>", taskList);

  return (
    <div className="task-app">
      <h1>TaskApp</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {taskList}
    </div>
  );
};

export default TaskApp;
