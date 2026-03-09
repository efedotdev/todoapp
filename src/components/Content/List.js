import React from 'react'
import { useTodo } from '../../contexts/TodoContext'

function List() {
    const todos = useTodo();
    console.log(todos)

    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn React</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Have a life!</label>
                    <button className="destroy"></button>
                </div>
            </li>
        </ul>
    )
}

export default List