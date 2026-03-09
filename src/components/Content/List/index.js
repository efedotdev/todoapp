import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'
import Item from './Item';

function List() {
    const { todos } = useTodo();

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
             <Item/>
            ))}

        </ul>
    )
}


export default List