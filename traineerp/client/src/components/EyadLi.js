import React from 'react'

function EyadLi({notes}) {
    return (

        notes.map(({id, title, body})=>(
            <li key={id}>
                <h1>{title}</h1>
                <p>{body}</p>
            </li>
            
        ))
    )
}

export default EyadLi
