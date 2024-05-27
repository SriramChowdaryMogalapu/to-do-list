import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem({ task, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { ...task, text: newTask });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
