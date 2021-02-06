import React from 'react'
import CalculatorScreen from './CalculatorScreen'
import CalculatorButtons from './CalculatorButtons'
import { CalculatorContext } from '../utils/CalculatorContext'
import '../assets/calculator.css'

function Calculator() {
  return (
    <CalculatorContext>
      <div className="calculator">
        <CalculatorScreen />
        <CalculatorButtons />
      </div>
      Made by Cosmin & Stroiu
    </CalculatorContext>
  )
}

export default Calculator
