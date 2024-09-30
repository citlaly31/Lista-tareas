import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas
  const [todos, setTodos] = useState([]);

  // Función para agregar una nueva tarea
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  // Función para eliminar una tarea
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Función para marcar una tarea como completada
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
