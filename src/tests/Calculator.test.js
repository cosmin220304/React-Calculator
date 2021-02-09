import '@testing-library/jest-dom'
import { render, fireEvent, screen, prettyDOM } from '@testing-library/react'
import Calculator from '../components/Calculator'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

describe('Basic interaction', () => {

    test('show that digit update screen', () => {
        //Arrange
        const digit = 1;
        render(<Calculator />)
    
        //Act
        fireEvent.click(screen.getByText(digit))
    
        //Assert
        expect(screen.getAllByText(digit).length).toBe(2)
    })
    
    test('show that you can create numbers using digits', () => {
        //Arrange
        const digit = 1;
        const digitPressedTwice = 11;
        render(<Calculator />)
    
        //Act
        fireEvent.click(screen.getByText(digit))
        fireEvent.click(screen.getAllByText(digit).pop())
    
        //Assert
        expect(screen.getByText(digitPressedTwice)).toBeInTheDocument()
    })
})

describe('Simple operations', () => {
    test('sum of two numbers displays corectly', () => {
        //Arrange
        const firstNumber = 9
        const secondNumber = 4
        const sum = firstNumber + secondNumber
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(firstNumber))
        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText(secondNumber))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText(sum)).toBeInTheDocument()
    })

    test('difference of two numbers displays corectly', () => {
        //Arrange
        const firstNumber = 9
        const secondNumber = 4
        const diff = firstNumber - secondNumber
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(firstNumber))
        fireEvent.click(screen.getByText('-'))
        fireEvent.click(screen.getByText(secondNumber))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getAllByText(diff).length).toBe(2)
    })

    test('product of two numbers displays corectly', () => {
        //Arrange
        const firstNumber = 9
        const secondNumber = 4
        const prod = firstNumber * secondNumber
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(firstNumber))
        fireEvent.click(screen.getByText('*'))
        fireEvent.click(screen.getByText(secondNumber))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText(prod)).toBeInTheDocument()
    })

    test('division of two numbers displays corectly, with integer result', () => {
        //Arrange
        const firstNumber = 6
        const secondNumber = 2
        const div = firstNumber / secondNumber
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(firstNumber))
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getByText(secondNumber))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getAllByText(div).length).toBe(2)
    })

    test('division of two numbers displays corectly, with non integer result', () => {
        //Arrange
        const firstNumber = 1
        const secondNumber = 3
        const div = firstNumber / secondNumber
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(firstNumber))
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getByText(secondNumber))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText(div)).toBeInTheDocument()
    })
})

describe('Complex operations', () => {
    test('complex operation displays corectly', () => {
        //Arrange
        const result = ((100 + 1) / 3) * 4
        render(<Calculator />)

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
})

describe('Operations with 0', () => {
    test('1/0 is infinity', () => {
        //Arrange
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText(1))
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getAllByText(0)[1])
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText('Infinity')).toBeInTheDocument()
    })

    test('0/0 is 0', () => {
        //Arrange
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getAllByText(0)[1])
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getAllByText(0)[1])
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText(0)).toBeInTheDocument()
    })

    test('0 divided by random int is 0', () => {
        //Arrange
        const randomInt = getRandomInt(10)
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getAllByText(randomInt).pop())
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getAllByText(0)[1])
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText(0)).toBeInTheDocument()
    })
})

describe('Bad inputs', () => {
    test('multiple operation w/out digits then equal should throw error', () => {
        //Arrange
        render(<Calculator />)

        //Act
        fireEvent.click(screen.getByText('(mod)'))
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getByText('(mod)'))
        fireEvent.click(screen.getByText('='))

        //Assert
        expect(screen.getByText('Error')).toBeInTheDocument()
    })
})