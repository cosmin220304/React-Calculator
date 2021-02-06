import React from 'react'
import Button from './Button'
import DigitButton from './DigitButton'

const CalculatorButtons = () => {
    return (
        <div className="calculator__buttons">
            <DigitButton value={1} />
            <DigitButton value={2} />
            <DigitButton value={3} />
            <Button value="+" />
            <DigitButton value={4} />
            <DigitButton value={5} />
            <DigitButton value={6} />
            <Button value="-" />
            <DigitButton value={7} />
            <DigitButton value={8} />
            <DigitButton value={9} />
            <Button value="*" />
            <Button value="=" />
            <DigitButton value={0} />
            <Button value="%" />
            <Button value="/" />
        </div>
    )
}

export default CalculatorButtons
