import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      {todo.text}
      <div>
        <button className="complete" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Deshacer" : "Completar"}
        </button>
        <button className="delete" onClick={() => removeTodo(index)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Todo;
