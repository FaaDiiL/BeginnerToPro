import React from 'react'

function EyadForm({handleSubmit, setTitle, setBody }) {
    return (
        <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} type='text' name='title' className='form' />
        <textarea onChange={(e) => setBody(e.target.value)}  type='text' name='body' className='form' />

        <button>Add Note</button>
        </form>
    )
}

export default EyadForm
