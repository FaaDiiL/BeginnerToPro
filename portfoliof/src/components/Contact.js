import React, { useState } from 'react'

function Contact() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactMsg, setContactMsg] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (
      e.target[0].value !== '' &&
      e.target[1].value !== '' &&
      e.target[2].value !== ''
    ) {
      setContactsInfo([
        ...contactsInfo,
        {
          Name: name,
          Email: email,
          Message: contactMsg,
        },
      ])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
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
        onChange={(e) => setContactMsg(e.target.value)}
      />

      <input type='submit' value='Send' />
    </form>
  )
}

export default Contact
