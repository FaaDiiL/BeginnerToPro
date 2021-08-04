import './Calculator.css'
import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

function Calculator() {
  const buttonPressed = (e) => {
    if (e.target.value !== undefined) {
      console.log(e.target.value)
    }
  }
  return (
    <div className='calculator'>
      <CalculatorScreen />
      <div onClick={buttonPressed}>
        <CalculatorKeys />
      </div>
    </div>
  )
}

export default Calculator
