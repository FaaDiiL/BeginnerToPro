import React, { useState, useEffect } from 'react'

function TodoApp() {
    // TodoApp
    // Todo 1.0 - Form med (text-input) och (submit-knapp) / 
    // Todo 1.2 - Lista med alla todos /  Todo-title buttons=>(Done||Edit||Delete)
    // Todo 1.3 - Skapa en console.log()
    // Todo 2.0 - Spara till localStorage
    // Todo 3.0 - läsa / skriva till localStorage,

   
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const [isDone, setIsDone] = useState(false)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { title, isDone }])
    }

    const handleDone = (e) => {
         e.target.checked = 
         setIsDone(e.target.checked)
      
     //    if(isDone === e.target.checked){
           
     //    }else {
            
     //    }
     //      = false
     //     console.log(e.target)
        
     //    if (isDone === true) {
     //        console.log('Todo is Done')
     //    } else {
     //        console.log('Todo is not Done')
     //    }
    }
    const handleEdit = () => {
        console.log('Todo is edited')
    }

    const handleDelete = () => {
        console.log('Todo is deleted')

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
                              <i className="fas fa-trash-alt" onClick={handleDelete} />
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
