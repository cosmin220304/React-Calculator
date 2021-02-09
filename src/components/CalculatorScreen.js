import React, { useContext } from 'react'
import Button from './Button'
import { ResultContext } from '../utils/CalculatorContext'

const CalculatorScreen = () => {
    const [result,] = useContext(ResultContext)

    return (
        <div className="calculator__screen">
            <div className="calculator__screen--content">
                {isNaN(result)? 'Error' : result}
            </div>
            <div className="calculator__screen__buttons">
                <Button value="Clear" isOperator />
                <div />
                <Button value="Del" isOperator />
            </div>
        </div>
    )
}

export default CalculatorScreen
