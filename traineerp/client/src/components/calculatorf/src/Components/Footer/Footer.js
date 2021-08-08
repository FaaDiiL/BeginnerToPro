import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <small>
        Created By{' '}
        <a href='https://github.com/FaaDiiL' target='_blank'>
          Fadil
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </small>
    </footer>
  )
}

export default Footer
