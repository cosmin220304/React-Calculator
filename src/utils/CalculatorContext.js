import React, { useState } from 'react'

const ResultContext = React.createContext()
const PrevResultContext = React.createContext()
const OperationContext = React.createContext()

const CalculatorContext = ({ children }) => {
    const [result, setResult] = useState(0)
    const [prevResult, setPrevResult] = useState(0)
    const [operation, setOperation] = useState('')

    return (
        <ResultContext.Provider value={[result, setResult]}>
            <PrevResultContext.Provider value={[prevResult, setPrevResult]}>
                <OperationContext.Provider value={[operation, setOperation]}>
                    {children}
                </OperationContext.Provider>
            </PrevResultContext.Provider>
        </ResultContext.Provider>
    )
}

export {
    CalculatorContext,
    ResultContext,
    PrevResultContext,
    OperationContext,
}
