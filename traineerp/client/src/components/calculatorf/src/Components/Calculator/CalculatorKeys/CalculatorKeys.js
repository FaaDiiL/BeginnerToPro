import React from 'react'

import Operators from './Operators/Operators'
import CalculatorNumKeys from './CalculatorNumKeys/CalculatorNumKeys';
import FunctionCalculatorKeys from './FunctionCalculatorKeys/FunctionCalculatorKeys';
function CalculatorKeys() {
     return (
          <div className="calculator-keys">
               <Operators />
               <CalculatorNumKeys />
               <FunctionCalculatorKeys />
          </div>           
     )
}

export default CalculatorKeys
