import { useEffect, useState } from 'react'

import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

import './Calculator.css'

function Calculator() {
  const [tapedNumbers, setTapedNumbers] = useState([])
  const [firstPart, setFirstPart] = useState({ number: 0, completed: false })
  const [operator, setOperator] = useState({ operator: null, completed: false })
  const [secondPart, setSecondPart] = useState({ number: 0, completed: false })
  const [screen, setScreen] = useState()
  const [result, setResult] = useState(null)

  const getButtonValue = (e) => {
    if (e.target.value === undefined) {
      return
    }
    if (
      e.target.className === 'number-btn' &&
      e.target.className !== 'operator'
    ) {
      setTapedNumbers(Number([tapedNumbers, e.target.value].join('')))
      setScreen(Number([tapedNumbers, e.target.value].join('')))
    }
    if (e.target.className === 'operator' && !operator.completed) {
      setOperator({ operator: e.target.value, completed: true })
      setFirstPart({
        number: Number([tapedNumbers].join('')),
        completed: true,
      })
      setTapedNumbers(Number(null))
    }
    if (e.target.className === 'equal-sign' && operator.completed) {
      setSecondPart({
        number: Number([tapedNumbers].join('')),
        completed: true,
      })

      switch (operator.operator) {
        case '+':
          setResult(firstPart.number + tapedNumbers)
          setScreen(firstPart.number + tapedNumbers)
          break
        case '-':
          setResult(firstPart.number - tapedNumbers)
          setScreen(firstPart.number - tapedNumbers)
          break
        case '*':
          setResult(firstPart.number * tapedNumbers)
          setScreen(firstPart.number * tapedNumbers)
          break
        case '/':
          setResult(firstPart.number / tapedNumbers)
          setScreen(firstPart.number / tapedNumbers)
          break

        default:
          break
      }
    }
  }

  return (
    <div className='calculator'>
      <CalculatorScreen screen={screen} />
      <div onClick={getButtonValue}>
        <CalculatorKeys />
      </div>
    </div>
  )
}

export default Calculator
