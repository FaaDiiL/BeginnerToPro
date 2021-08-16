import { Container } from '@material-ui/core/'
import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import './App.css'

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
