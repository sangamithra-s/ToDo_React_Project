import React from 'react'

export default function ToDoCard(props) {
    const { children, removeTodo } = props;
    return (
        <div>
            <li className='todoItem'>
                {children}
                <div className='actionsContainer'>
                    <button onClick={() => removeTodo(props.index)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button onClick={() => props.editTodo(props.index)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </li>

        </div>
    )
}
