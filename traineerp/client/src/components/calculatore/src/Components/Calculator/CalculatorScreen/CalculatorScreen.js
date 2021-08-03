import React from 'react'
import './CalculatorScreen.css'

function CalculatorScreen() {
  return (
    <input
      type='text'
      className='calculator-screen'
      defaultValue={0}
      disabled
    />
  )
}

export default CalculatorScreen
