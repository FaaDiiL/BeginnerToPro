import './Calculator.css'
import CalculatorKeys from './CalculatorKeys/CalculatorKeys'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

function Calculator() {
  return (
    <div className='calculator'>
      <CalculatorScreen />
      <CalculatorKeys />
    </div>
  )
}

export default Calculator
