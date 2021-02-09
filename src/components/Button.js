import React, { useContext } from 'react'
import { ResultContext, PrevResultContext, OperationContext } from '../utils/CalculatorContext'

const Button = ({ value }) => {
    const [result, setResult] = useContext(ResultContext)
    const [prevResult, setPrevResult] = useContext(PrevResultContext)
    const [operation, setOperation] = useContext(OperationContext)

    const operationToResult = {
        '+': prevResult + result,
        '-': prevResult - result,
        '/': prevResult / result,
        '*': prevResult * result,
        '(mod)': prevResult % result,
        '': result,
    }

    const computeEqual = () => {
        const newResult = operationToResult[operation]

        if (isNaN(newResult)) {
            setPrevResult(0)
            setOperation('')
            setResult('Error')
            return
        }

        setResult(newResult)
        setPrevResult(0)   
    }

    const computeOperation = () => {
        const newPrevResult = operationToResult[operation]
        
        if (isNaN(newPrevResult)) {
            setPrevResult(0)
            setOperation('')
            setResult('Error')
            return
        }

        setPrevResult(newPrevResult)
        setResult(0)
        setOperation(value)
    }

    const clickHandler = () => {
        switch (value) {
            case 'Del':
                setResult(parseInt(result / 10))
                break
            case 'Clear':
                setResult(0)
                setPrevResult(0)
                break
            case '=':
                computeEqual()
                break
            default:
                computeOperation()
        }
    }

    return (
        <div className="button" onClick={clickHandler}>
            <div>
                {value}
            </div>
        </div>
    )
}

export default Button
