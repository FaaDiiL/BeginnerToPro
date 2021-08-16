import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default App
