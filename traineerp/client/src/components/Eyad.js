import React, {useState, useEffect} from 'react'
import {v4} from 'uuid'
import EyadForm from './EyadForm'
import EyadUl from './EyadUl'

function Eyad() {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    // Parsear data från localStorage
    const lsData = JSON.parse(localStorage.getItem('notes'))


    useEffect( () => {
        //läser in data från localstorage och initierar notes
       localStorage.getItem('notes') && lsData.length != 0 && setNotes(lsData)
    },[])

    useEffect( () => {
        //skickar notes från vår notes useState till localStorage
            localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])


    const handleSubmit = (e) => {
        e.preventDefault() 
        setNotes( [ ...notes, {id:v4(), title, body} ] )
        

    //    localStorage.setItem('notes', JSON.stringify() )

    }
    return (
        <div className='formStyling'>
            <h1>Eyad's Note App!</h1>
            <EyadForm handleSubmit={handleSubmit} setTitle={setTitle} setBody={setBody} />
            <EyadUl notes={notes}/>
        
         
        </div>
    )
}

export default Eyad
