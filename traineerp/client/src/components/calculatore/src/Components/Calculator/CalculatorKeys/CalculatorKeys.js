import React from 'react'
import CalculatorFunctionKeys from './CalculatorFunctionKeys/CalculatorFunctionKeys'
import CalculatorNumKeys from './CalculatorNumKeys/CalculatorNumKeys'
import Operators from './Operators/Operators'
import '../CalculatorKeys/CalculatorKeys.css'

function CalculatorKeys() {
  return (
    <div className='calculator-keys'>
      <Operators />
      <CalculatorNumKeys />
      <CalculatorFunctionKeys />
    </div>
  )
}

export default CalculatorKeys
