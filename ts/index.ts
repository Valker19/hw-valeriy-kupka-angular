// 1. Определить переменные для всех примитивом джавасткрипта

let string1: string = 'type script';
let number1: number = 0;
let boolean1: boolean = true;
let symbol1: symbol = Symbol('easycode');
let null1: null = null; 
let undefined1: undefined;

// 2. Написать функцию принимающую число и возвращающую его факториал
// по всем правилам тайпскрипта

function getFactorial(number: number = 1): number {
    if (number < 0) return;
    if (!number) number = 1;

    let result: number = number;

    for (let index: number = number; index > 1; index--) {
        result *= index - 1;
    }
    
    return result;
}

// 3. Написать функцию принимающую число и возврашающую массив с числами фибоначи
// до этого порядкового числа

function getArrayOfFibonacciNumbers(number: number): number[] {
    const result: number[] = [];

    for (let index: number = 0; index < number; index++) {
        result.length >= 2 ? result.push(result[result.length - 2] + result[result.length - 1]) : result.push(1);
    }
    
    return result;
}