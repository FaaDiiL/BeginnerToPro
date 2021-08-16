import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Send } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}))

function Contact() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactMsg, setContactMsg] = useState('')
  const classes = useStyles()

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

    if (name !== '' && email !== '' && contactMsg !== '') {
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
    <form className='contact-form' onSubmit={handleSubmit}>
      <TextField
        id='standard-basic'
        label='Name'
        name='name'
        onChange={(e) => setName(e.target.value)}
        className='name-field'
      />
      <TextField
        id='standard-basic'
        label='Email'
        type='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        className='email-field'
      />
      <div className='msg-box'>
        <TextField
          id='outlined-multiline-static'
          label='Message'
          multiline
          rows={4}
          placeholder='Type your message here...'
          variant='outlined'
          name='message'
          onChange={(e) => setContactMsg(e.target.value)}
        />
      </div>

      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        endIcon={<Send />}
      >
        Send
      </Button>
    </form>
  )
}

export default Contact
