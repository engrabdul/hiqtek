import React, { useState } from 'react';
import './style/Todo.css';

export default function Todo() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([
        "Afeez",
        "Tunde",
        "Abidemi"
    ])

    function createTodo() {
        //console.log(`Task value ${task}`)
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, task]
        })

    }

    function tryToCheckForEnterKey(e) {
        //console.log('Event', e)
        if(e.keyCode === 13) {
            createTodo()
        }
    }

    return (
      <div id="content">
        <input 
            onKeyDown={tryToCheckForEnterKey}
            type="text" 
            value={task} 
            onChange={event => {
                setTask(event.target.value)
            }}
        />
        <p>
            <button onClick={createTodo} > Create Todo </button>
        </p>
        <ul>
            {todos.map(todo => {
                return <li>{todo}</li>
            })}
        </ul>
      </div>
    )
}