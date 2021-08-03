import React from 'react'
import './CalculatorFunctionKeys.css'

function CalculatorFunctionKeys() {
  return (
    <>
      <button type='button' className='decimal' value='.'>
        .
      </button>
      <button type='button' className='all-clear' value='all-clear'>
        AC
      </button>

      <button type='button' className='equal-sign' value='='>
        =
      </button>
    </>
  )
}

export default CalculatorFunctionKeys
