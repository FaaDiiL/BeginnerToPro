import React from 'react'

import './Operators.css'

function Operators() {
  return (
    <>
      <button type='button' className='operator' value='+'>
        +
      </button>
      <button type='button' className='operator' value='-'>
        -
      </button>
      <button type='button' className='operator' value='*'>
        ×
      </button>
      <button type='button' className='operator' value='/'>
        ÷
      </button>
    </>
  )
}

export default Operators
