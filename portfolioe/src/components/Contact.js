import React, { useState, useEffect } from 'react'

function Contact() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
   const storageTokenData = JSON.parse(localStorage.getItem('token'))
   if(storageTokenData){
       setContactsInfo(storageTokenData)
   }
  }, [])

  useEffect(() => {
   localStorage.setItem('token', JSON.stringify(contactsInfo))
  }, [contactsInfo])

  function handleSubmit(e) {
    e.preventDefault()
   

    if (name !== '' && email !== '' && msg !== '') {
      setContactsInfo([
        ...contactsInfo,
        {
          Name: name,
          Email: email,
          Message: msg,
        },
      ])
    } else {
      alert('You need to Write some Credentials!')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        name='message'
        placeholder='Message'
        onChange={(e) => setMsg(e.target.value)}
      />
      <input type='submit' value='send' />
    </form>
  )
}

export default Contact
