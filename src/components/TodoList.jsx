import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ tasks, editTask, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
