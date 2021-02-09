import React, { useContext } from 'react'
import { ResultContext, PrevResultContext, OperationContext } from '../utils/CalculatorContext'

const Button = ({ value }) => {
    const [result, setResult] = useContext(ResultContext)
    const [prevResult, setPrevResult] = useContext(PrevResultContext)
    const [operation, setOperation] = useContext(OperationContext)

    const computeOperation = {
        '+': () => prevResult + result,
        '-': () => prevResult - result,
        '/': () => prevResult / result,
        '*': () => prevResult * result,
        '%': () => prevResult % result,
    }

    const computeEqual = () => {
        const newResult = computeOperation[operation]
        setResult(newResult)
        setPrevResult(0)   
    }

    const clickHandler = () => {
        switch (value) {
            case 'Del':
                setResult(parseInt(result / 10))
                break
            case 'Clear':
                setResult(0)
                break
            case '=':
                computeEqual()
                break
            default:
                setPrevResult(result)
                setResult(0)
                setOperation(value)
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
