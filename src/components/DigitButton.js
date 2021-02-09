import React, { useContext } from 'react'
import { ResultContext } from '../utils/CalculatorContext'

const DigitButton = ({value}) => {
    const [result, setResult ] = useContext(ResultContext)

    const clickHandler = () => {
        if (Number.isInteger(result)) {
            setResult(result * 10 + value)
        } else {
            setResult(value)
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

export default DigitButton
