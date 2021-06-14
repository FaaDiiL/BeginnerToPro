import React, { useEffect, useState } from 'react'

function TodoApp() {
    // TodoApp
    // Todo 1.0 - Form med (text-input) och (submit-knapp) / 
    // Todo 1.2 - Lista med alla todos /  Todo-title buttons=>(Done||Edit||Delete)
    // Todo 1.3 - Skapa en console.log()
    // Todo 2.0 - Spara till localStorage
    // Todo 3.0 - lÃ¤sa / skriva till localStorage,

   
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const [isDone, setIsDone] = useState(false)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { title, isDone}])
    }

    const handleDone = (e) => {
         e.target.checked = 
         setIsDone(e.target.checked)
    }
    const handleEdit = (e) => {
        setTodos(todos.find((todo,i) => i === +e.target.id))
    }

    const handleDelete = (e) => {
        console.log('Todo is deleted', e.target.id)
        setTodos(todos.filter((todo, i) => i !== +e.target.id ))
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} />
                <button>Add</button>
            </form>

            <ul>
            {
                 todos.map(({title, isDone},id)=>(
                     <li key={id}>
                         <span style={{ fontSize: '2rem' }}>
                              {title}
                              <input type='checkbox' onChange={handleDone} defaultChecked={isDone} />
                              <i className="far fa-edit " onClick={handleEdit} />
                              <i className="fas fa-trash-alt" onClick={handleDelete} id={id} />
                         </span>
                    </li>
                 )
                      
                )
            }
               
            </ul>

        </>



    )

     
}

export default TodoApp