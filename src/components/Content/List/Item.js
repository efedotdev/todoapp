import React from 'react'
import { useTodo } from '../../../contexts/TodoContext';

function Item({ todo }) {
    const { toggleTodo, destroyTodo} = useTodo()
    const onChange = (id) => {
        //     const cloned_todos = [...todos];
        //     const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)
        //     const item = todos[itemIndex]              
        // bunu farklı componentlerde kullanırken tekrar etmemek adına contexte tanımladık.
        //     item.completed = !item.completed;
        //     setTodos(cloned_todos);
        toggleTodo(id)
    }
    const onDestroy = (id) => {destroyTodo(id)}
    return (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
            </div>
        </li>
    )
}

export default Item;