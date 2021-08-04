import { useState } from 'react'

import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

import './Calculator.css'

function Calculator() {
  const [firstPart, setFirstPart] = useState(0)
  const [operator, setOperator] = useState(null)
  const [secondPart, setSecondPart] = useState(0)
  const [result, setResult] = useState(null)

  const getButtonValue = (e) => {
    if (e.target.value !== undefined) {
      console.log(e.target.value)
    }
  }

  return (
    <div className='calculator'>
      <CalculatorScreen />
      <div onClick={getButtonValue}>
        <CalculatorKeys />
      </div>
    </div>
  )
}

export default Calculator
