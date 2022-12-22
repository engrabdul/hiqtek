import React, { useState } from 'react';
import './style/Todo.css';

let globalID = 0

export default function Todo() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function createTodo(event) {
        event.preventDefault()
        //console.log(`Task value ${task}`)
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, { todo: task, id: globalID++ }]
        })

    }

    function deleteItem(itemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
    }

    // function tryToCheckForEnterKey(e) {
    //     //console.log('Event', e)
    //     if(e.keyCode === 13) {
    //         createTodo()
    //     }
    // }

    return (
      <div id="content">
        <form onSubmit={createTodo}>
            <input 
                //onKeyDown={tryToCheckForEnterKey}
                type="text" 
                value={task} 
                onChange={event => {
                    setTask(event.target.value)
                }}
            />
            <p>
                <button type="submit" > Create Todo </button>
            </p>
        </form>
        
        <ul>
            {todos.map((item, index) => {
                return <li key={item.id}>{item.todo}&nbsp;&nbsp;
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
            })}
        </ul>
        <p>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </p>
        
      </div>
    )
}