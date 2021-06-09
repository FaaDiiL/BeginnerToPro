import React, {useState, useEffect} from 'react'

function TodoApp() {

     // TodoApp
     // Todo 1.0 - Form med (text-input) och (submit-knapp) / 
     // Todo 1.2 - Lista med alla todos /  Todo (checkbox- ture? done) /  (Edit||Delete)
     // Todo 2.0 - Spara till localStorage
     // Todo 3.0 - läsa / skriva till localStorage

     const [todos, setTodos] = useState([])
     const [title,setTitle] = useState('')
     const [isDone, setIsDone] = useState(false)

     const handleSubmit = (e) => {
          e.preventDefault()
          console.log('Todo Created')
     }
     const handleChange = (e) =>{
          // setTitle(e.target.value)
          console.log(e.target.value)
     }
     const editTodo = (e) =>{
          console.log('Edited todo')
     }
     const deleteTodo = (e) =>{
          console.log('Deleted todo')
     }
     const doneTodo= () => {
          setIsDone(!isDone)
          if(isDone !== true) {
               console.log(`Todo is undone`)
          }else{
               console.log(`Todo is done`)
          }
     }

     return (
          <div className="TodoApp">
               <h3>Hello</h3>

               <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} />
                    <input type='submit' value={'Add Todo'} />
               </form>

               <ul style={{width:'500px'}}>
                    <li>
                         <span style={{fontSize: '2rem', color: 'black'}}>
                              My first todo
                              <i className="fas fa-check" onClick={doneTodo} />
                              <i className="far fa-edit " onClick={editTodo} />
                              <i className="fas fa-trash-alt" onClick={deleteTodo} />
                         </span>
                    </li>
               </ul>               
          </div>
     )
}

export default TodoApp
