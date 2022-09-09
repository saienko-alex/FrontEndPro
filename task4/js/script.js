
let action = getAction('введите действие?')
let times = getTimes();
let resultExpression = getResultExpression(action, times);




function getAction(action) {
    while(action !== '+' && action !== '-' && action !== '/' && action !== '*') {
        action = prompt('Напишите действие')
    }
    return action;
}

function getTimes() {
    let value = prompt('Введите количество действий?');
    while(isTimesInvalid(value)) {
        value = prompt('Введите количество действий?');
    }
    return +value;
}

function isTimesInvalid(value) {
    return value === null || value.trim() === '' || isNaN(value) || value <= 2;
}

function getNumbers(title) {
    let num = prompt(title);
    while(isNumbersInvalid(num)) {
        num = prompt(title);
    }
    return +num;
}

function isNumbersInvalid(num) {
    return num === null || num.trim() === '' || isNaN(num) || num <= 0;
}

function getResultExpression(operation, counts) {
    let result = getNumbers('введите число 1');
    let expression = result;

    for(let i = 1; i < counts; i++) {
        const number = getNumbers('введите число ' + (i + 1))

        result = calculate(result, number, operation);
        expression += operation + number;
    }
    return `${expression} = ${result}`;
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-': 
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b; 
    }
}


resultExpression






// function getInputNumbers() {
//     let inputSum = 1;
//     for(let i = 1; i <= times; i++) {
//         let inputResult = getInputResult()
//         if(action === '*') {
//             inputSum = inputSum * inputResult;
//         } else if(action === '+') {
//             inputSum = inputSum + inputResult;
//         } else if(action === '-') {
//             inputSum = inputSum + inputResult;
//         } else if(action === '/') {
//             inputSum = inputSum + inputResult;
//         }         
//     }
//     return inputSum;
// }
// alert()







