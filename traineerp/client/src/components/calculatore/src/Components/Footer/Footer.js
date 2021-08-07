import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <small>
        Created By{' '}
        <a href='https://github.com/eyadal' target='_blank'>
          Eyad Al Farhan
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </small>
    </footer>
  )
}

export default Footer
