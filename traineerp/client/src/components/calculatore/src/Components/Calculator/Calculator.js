import { useState } from 'react'
import './Calculator.css'
import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'
import Header from './../Header/Header'
import Footer from '../Footer/Footer'

function Calculator() {
  const [clickedNumber, setClickedNumber] = useState([])
  const [firstPart, setFirstPart] = useState({ numbers: 0, completed: false })
  const [operator, setOperator] = useState({ operator: null, completed: false })
  const [decimal, setDecimal] = useState({ completed: false })
  const [secondPart, setSecondPart] = useState({ numbers: 0, completed: false })
  const [screen, setScreen] = useState(null)
  const [result, setResult] = useState(null)

  const buttonPressed = (e) => {
    if (e.target.value === undefined) {
      return
    }

    if (e.target.className === 'all-clear') {
      setClickedNumber([])
      setFirstPart({ numbers: 0, completed: false })
      setOperator({ operator: null, completed: false })
      setDecimal({ completed: false })
      setSecondPart({ numbers: 0, completed: false })
      setScreen(null)
      setResult(null)
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
    if (e.target.className === 'decimal' && !decimal.completed) {
      setDecimal({ completed: true })
      setClickedNumber(Number([clickedNumber].join('')) + e.target.value)
      setScreen(Number([clickedNumber].join('')) + e.target.value)
    }
    // Fill State for operator
    if (e.target.className === 'operator' && !operator.completed) {
      setDecimal({ completed: false })
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
    <div className='wrapper'>
      <div>
        <Header />

        <div className='calculator'>
          <CalculatorScreen screen={screen} />
          <div onClick={buttonPressed}>
            <CalculatorKeys />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Calculator
