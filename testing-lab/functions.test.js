let myFunctions = require('./functions')

test('return two returns 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

describe('greeting', () => {
    test('greeting', () => {
        expect(myFunctions.greeting('James')).toEqual("Hello, James.")
    })
    test('greeting', () => {
        expect(myFunctions.greeting('Jill')).toEqual("Hello, Jill.")
    })
})

describe('add', () => {
    test('add', () => {
        expect(myFunctions.add(1, 2)).toEqual(3)
    })
    test('add', () => {
        expect(myFunctions.add(5, 9)).toEqual(14)
    })
})

describe('Math functions', () => {
    test('multiply', () => {
        expect(myFunctions.multiply(3, 5)).toEqual(15)
    })
    test('divide', () => {
        expect(myFunctions.divide(15, 3)).toEqual(5)
    })
    test('subtract', () => {
        expect(myFunctions.subtract(15, 3)).toEqual(12)
    })
})