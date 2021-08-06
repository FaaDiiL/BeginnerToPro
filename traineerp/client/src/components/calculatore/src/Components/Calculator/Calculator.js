import { useState } from 'react'
import './Calculator.css'
import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

function Calculator() {
  const [clickedNumber, setClickedNumber] = useState(null)
  const [firstPart, setFirstPart] = useState({ numbers: 0, completed: false })
  const [operator, setOperator] = useState({ operator: null, completed: false })
  const [secondPart, setSecondPart] = useState({ numbers: 0, completed: false })
  const [screen, setScreen] = useState()
  const [result, setResult] = useState(null)

  const buttonPressed = (e) => {
    if (e.target.value === undefined) {
      return
    }

    // Fill State for firstPart
    if (
      e.target.className === 'number-btn' &&
      e.target.className !== 'operator'
    ) {
      console.log(e.target.value)
      setClickedNumber(Number([clickedNumber, e.target.value].join('')))
      setScreen(Number([clickedNumber, e.target.value].join('')))
    }
    // Fill State for operator
    if (e.target.className === 'operator' && !operator.completed) {
      setOperator({
        operator: e.target.value,
        completed: true,
      })
      setFirstPart({
        number: Number([clickedNumber].join('')),
        completed: true,
      })
      setClickedNumber(Number(null))
    }

    // Fill State for secondPart
    if (e.target.className === 'equal-sign' && operator.completed) {
      setSecondPart({
        number: Number([clickedNumber].join('')),
        completed: true,
      })
      switch (operator.operator) {
        case '+':
          setResult(firstPart.number + clickedNumber)
          setScreen(firstPart.number + clickedNumber)
          break
        case '-':
          setResult(firstPart.number - clickedNumber)
          setScreen(firstPart.number - clickedNumber)
          break
        case '/':
          setResult(firstPart.number / clickedNumber)
          setScreen(firstPart.number / clickedNumber)
          break
        case '*':
          setResult(firstPart.number * clickedNumber)
          setScreen(firstPart.number * clickedNumber)
          break

        default:
          break
      }
    }
  }

  return (
    <div className='calculator'>
      <CalculatorScreen screen={screen} />
      <div onClick={buttonPressed}>
        <CalculatorKeys />
      </div>
    </div>
  )
}

export default Calculator
