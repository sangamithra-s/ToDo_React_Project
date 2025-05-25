import ToDoInput from "./componenets/ToDoInput";
import ToDoList from "./componenets/ToDoList";
import React, { useState } from 'react';

function App() {

  const [todos, setTodoList] = useState(["Buy groceries",
    "Walk the dog",
    "Finish homework",
    "Clean the house",
    "Prepare dinner"]);

  const [todoValue, setTodoValue] = useState("");

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodo(todoIndex) {
    setTodoList((prevTodos) => prevTodos.filter((todo, index) => { return index !== todoIndex }));
  }

  function editTodo(todoIndex) {
    const valuetoedit = todos[todoIndex];
    setTodoValue(valuetoedit);
    removeTodo(todoIndex);
  }

  return (

    <main>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </main>

  );
}

export default App;
