import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

export default function TodoList() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new task to the list
  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  // Function to remove a task from the list
  const removeTask = (id) => {
    let updatedTasks = todos.filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

  // Function to mark a task as completed
  const completeTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  return (
    <div>
      {/* TodoForm component for adding tasks */}
      <TodoForm addTask={addTask} />
      {/* Todos component to display the list of tasks */}
      <Todos todos={todos} completeTask={completeTask} removeTask={removeTask} />
    </div>
  );
}
