import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const newTask = {
      id: Date.now(),
      text: task,
    };
    addTask(newTask);
    setTask("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
