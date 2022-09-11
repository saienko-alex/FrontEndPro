
let action = getAction('enter action')
let input = getInput()
let massive = input.split(',');
let numbers = toNum(massive)
let resultExpression = getResultExpression(numbers, action);
let total = calculate(action, resultExpression)



function getAction(action) {
    while(action !== '+' && action !== '-' && action !== '/' && action !== '*') {
        action = prompt('enter action')
    }
    return action;
}

function getInput() {
    num = prompt('enter number');
    while(num === null ) {
        num = prompt('enter number again');
    }
    return num;
}



function toNum(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i])
    }
    return arr;
}


function getResultExpression(value) {
    let result = [];
    for(let i = 0; i < value.length; i++) {
        result.push(value[i])  
    }
    return result;
}  

function calculate() {
    if(action === '+') {
        alert(resultExpression.reduce((acc, rec) => acc + rec));
    } else if(action === '*') {
        alert(resultExpression.reduce((acc, rec) => acc * rec));  
    } else if(action === '-') {
        alert(resultExpression.reduce((acc, rec) => acc - rec));  
    } else if(action === '/') {
        alert(resultExpression.reduce((acc, rec) => acc / rec));  
    }
}








