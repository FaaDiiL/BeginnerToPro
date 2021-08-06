import React from 'react'

import './CalculatorScreen.css'

function CalculatorScreen({ screen }) {
  return (
    <input
      type='text'
      className='calculator-screen'
      defaultValue={screen}
      disabled
    />
  )
}

export default CalculatorScreen
