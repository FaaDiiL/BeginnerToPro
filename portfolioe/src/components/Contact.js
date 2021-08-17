import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core'
import { Send } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
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
    <Grid item>
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
            placeholder='Type message here..'
            variant='outlined'
            name='message'
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>

        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          endIcon={<Send />}
        >
          SEND
        </Button>
      </form>
    </Grid>
  )
}

export default Contact
