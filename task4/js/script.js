
let action = getAction('введите действие?')
let numbers = getNumbers();
let inputNumbers = getInputNumbers(numbers);
let inputResult = getInputResult();




function getAction(action) {
    while(action !== '+' && action !== '-' && action !== '/' && action !== '*') {
        action = prompt('Напишите действие')
    }
    return action;
}

function getNumbers() {
    let value = prompt('Введите количество действий?');
    while(isNumbersInvalid(value)) {
        value = prompt('Введите количество действий?');
    }
    return value;
}

function isNumbersInvalid(value) {
    return value === null || value.trim() === '' || isNaN(value) || value <= 2;
}

function getInputResult() {
    let num = prompt('Введите число?');
    while(isInputResultInvalid(num)) {
        num = prompt('Введите число?');
    }
    return num;
}

function isInputResultInvalid(num) {
    return num === null || num.trim() === '' || isNaN(num) || num <= 0;
}

function getInputNumbers() {
    let inputSum = 1;
    for(let i = 1; i <= numbers; i++) {
        let inputResult = getInputResult()
        if(action === '*') {
            inputSum = inputSum * inputResult;
        } else if(action === '+') {
            inputSum = inputSum + inputResult;
        } else if(action === '-') {
            inputSum = inputSum + inputResult;
        } else if(action === '/') {
            inputSum = inputSum + inputResult;
        }         
    }
    return inputSum;
}
alert()







