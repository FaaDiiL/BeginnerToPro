import React, {useState, useEffect}from 'react'



// TodoApp
     // Todo 1.0 - Form med (text-input) och (submit-knapp) / 
     // Todo 1.2 - Lista med alla todos /  Todo (checkbox- ture? done) /  (Edit||Delete)
     // Todo 2.0 - Spara till localStorage
     // Todo 3.0 - läsa / skriva till localStorage

function TodoApp() {

    const [todo, setTodo] = useState('') 

    const  handleChange = (e)=> {

        console.log(e.target.value)
    }

    const  handleClick = (e)=> {
        console.log(e.target[0].value,'todo created!')
    }

    
    return (

        <div>

            <h1>Eyads Todo App</h1>

            <form onSubmit= {handleClick}>
                <input onChange={handleChange} type='text' placeholder='todo'  /> 
                <button>Add </button>
            </form>
            
            <ul >
                <li> Todo 
                    <i className="far fa-edit"></i> 
                    <i className="far fa-trash-alt"></i>
                </li> 
            </ul>

        </div>
    )
}

export default TodoApp
