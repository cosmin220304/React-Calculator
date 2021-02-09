import '@testing-library/jest-dom'
import {render, fireEvent, screen, prettyDOM} from '@testing-library/react'
import Calculator from '../components/Calculator'

test('show that digit update screen', () => {
    const digit = 1;
    render(
        <Calculator/>
    )
    fireEvent.click(screen.getByText(digit))
    expect(screen.getAllByText(digit).length).toBe(2)
})

test('show that you can create numbers using digits', () => {
    const digit = 1;
    const digitPressedTwice = 11;
    render(
        <Calculator/>
    )
    fireEvent.click(screen.getByText(digit))
    fireEvent.click(screen.getAllByText(digit)[1])
    expect(screen.getByText(digitPressedTwice)).toBeInTheDocument()
})

test('check if sum of two numbers returns corectly', () => {
    //Arrange
    const firstNumer = 9
    const secondNumer = 4
    const sum = firstNumer + secondNumer
    render(<Calculator/>)

    //Act
    fireEvent.click(screen.getByText(firstNumer))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText(secondNumer))
    fireEvent.click(screen.getByText('='))

    //Assert
    expect(screen.getByText(sum)).toBeInTheDocument()
})

test('check complex operation', () => {
    //Arrange
    const result = ((100 + 1 ) / 3 ) * 4
    render(<Calculator/>)

    //Act
    fireEvent.click(screen.getByText(1))
    fireEvent.click(screen.getByText(0))
    fireEvent.click(screen.getByText(0))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText(1))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText(3))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText(4))
    fireEvent.click(screen.getByText('='))

    //Assert
    expect(screen.getByText(result)).toBeInTheDocument()
})