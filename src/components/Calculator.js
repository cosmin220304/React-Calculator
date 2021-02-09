import React from 'react'
import CalculatorScreen from './CalculatorScreen'
import CalculatorButtons from './CalculatorButtons'
import { CalculatorContext } from '../utils/CalculatorContext'
import '../assets/calculator.css'

function Calculator() {
  return (
    <div className="calculator">
      <CalculatorContext>
        <CalculatorScreen />
        <CalculatorButtons />
      </CalculatorContext>
    </div>
  )
}

export default Calculator
