import React from 'react';
import { useState } from 'react';

export default function ToDoInput(props) {
    const { addTodo, todoValue, setTodoValue } = props;
    const handleInputChange = (event) => {
        setTodoValue(event.target.value);
    };
    return (
        <header>
            <input value={todoValue} onChange={handleInputChange} type="text" placeholder="Add a new task..." />
            <button onClick={() => {
                addTodo(todoValue)
                setTodoValue(""); // Clear the input field after adding the todo
            }

            } type="submit">Add</button>
        </header>
    );
}