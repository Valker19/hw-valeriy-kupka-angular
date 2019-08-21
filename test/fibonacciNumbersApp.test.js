const { assert } = require('chai');
const { getFibonacciNumbers } = require('../src/fibonacciNumbersApp');

test('Test getFibonacciNumbers. Input 1. Expected [0]', () => {
    // Arrange
    const
        input = 1,
        expectedResult = [0];

    // Act
    const actualResult = getFibonacciNumbers(input);
    
    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test getFibonacciNumbers. Input 2. Expected [0, 1]', () => {
    // Arrange
    const
        input = 2,
        expectedResult = [0, 1];

    // Act
    const actualResult = getFibonacciNumbers(input);
    
    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test getFibonacciNumbers. Input 3. Expected [0, 1, 1]', () => {
    // Arrange
    const
        input = 3,
        expectedResult = [0, 1, 1];

    // Act
    const actualResult = getFibonacciNumbers(input);
    
    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test getFibonacciNumbers. Input 4. Expected [0, 1, 1, 2]', () => {
    // Arrange
    const
        input = 4,
        expectedResult = [0, 1, 1, 2];

    // Act
    const actualResult = getFibonacciNumbers(input);
    
    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test getFibonacciNumbers. Input -1. Expected "Exception"', () => {
    // Arrange
    const
        input = -1,
        expectedResult = 'Exception';

    // Act
    const actualResult = getFibonacciNumbers(input);
    
    // Assert
    assert.deepEqual(actualResult, expectedResult);
});