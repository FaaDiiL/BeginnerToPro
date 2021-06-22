import React, { useEffect, useState } from 'react'

function Contact() {
  const [contactsInfo, setContactsInfo] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactMsg, setContactMsg] = useState('')

  useEffect(() => {
    const myLocalStorageData = JSON.parse(localStorage.getItem('token'))
    if (myLocalStorageData) {
      setContactsInfo(myLocalStorageData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(contactsInfo))
  }, [contactsInfo])

  function handleSubmit(e) {
    e.preventDefault()

    if (
      name !== '' &&
      email !== '' &&
      contactMsg !== ''
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
