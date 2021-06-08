import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';

function Fadil() {
     const [notes, setNotes] = useState([])
     const [title, setTile] = useState('')
     const [body, setBody] = useState('')
     // Parsear data från localStorage
     const lsData = JSON.parse(localStorage.getItem('notes'))

     useEffect(()=>{
          // Läser in data från localstorage och initisierar notes
          localStorage.getItem('notes') && lsData.length != 0 && setNotes(lsData)
     },[])

     useEffect(()=>{
          // Skickar notes från vår note-state till LocalStorage 
          localStorage.setItem("notes",JSON.stringify(notes))
     },[notes])


     const handleSubmit = (e) => {
          e.preventDefault()
          setNotes( [ ...notes, { id:v4(), title, body } ] )
     }



     return (
          <div className="formStyling">
               <h1>Note App - Fadil</h1>
               <form onSubmit={handleSubmit} >
                    <input onChange={(e) => setTile(e.target.value)} type='text' name='title' className="form" />
                    <textarea onChange={(e) => setBody(e.target.value)} name='body' className="form"></textarea>
                    <button>Add note</button>
               </form>

                <ul>
                    {
                         notes.map(({id,title,body})=>(
                              <li key={id}>
                                   <h1>{title}</h1>
                                   <p>{body}</p>
                              </li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default Fadil
