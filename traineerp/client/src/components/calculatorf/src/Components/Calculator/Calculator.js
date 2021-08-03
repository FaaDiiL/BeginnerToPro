import './Calculator.css';
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'
import CalculatorKeys from './CalculatorKeys/CalculatorKeys';
function Calculator() {
  return (
      <div className="calculator">
        <CalculatorScreen />
        <CalculatorKeys />
      </div>
  );
}

export default Calculator;
