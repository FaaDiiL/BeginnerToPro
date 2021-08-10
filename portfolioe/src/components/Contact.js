import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Send } from '@material-ui/icons'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  textArea: {
    marginTop: '15px',
    paddingTop: '15px',
  },
}))
function Contact() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const classes = useStyles()

  useEffect(() => {
    const storageTokenData = JSON.parse(localStorage.getItem('token'))
    if (storageTokenData) {
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

      <br />
      <TextField
        id='outlined-multiline-static'
        label='Message'
        multiline
        rows={4}
        placeholder='Type message here..'
        variant='outlined'
        name='message'
        onChange={(e) => setMsg(e.target.value)}
        InputProps={{ className: classes.textArea }}
        className='msg-box'
      />
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        endIcon={<Send />}
      >
        SEND
      </Button>
    </form>
  )
}

export default Contact
