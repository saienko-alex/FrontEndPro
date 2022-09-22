let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let action = document.querySelector('#action');
const btn = document.querySelector('#calculateButton');
const resultStroke = document.querySelector('#result');

 
function btnClick() {
    let num1 = +number1.value;
    let num2 = +number2.value;
    let operator = action.value;

 
    resultStroke.innerHTML = `${num1} ${operator} ${num2} = ${calc(num1, num2, operator)}`;
}
function calc(num1, num2, operator){
    switch(operator) {
    case '+':
        return num1 + num2;
    case '-': 
        return num1 - num2;
    case '/': 
        return num1 / num2;
    case '*':
        return num1 * num2;
    }
}

btn.addEventListener('click', btnClick);






















// const btn = document.querySelector('#calculateButton');
// const resultStroke = document.querySelector('#result');



   
 
// function btnClick() {
//     const {a, b, operator} = getValues();
    
//     resultStroke.innerHTML = `${a} ${operator} ${b} = ${calc(a, b, operator)}`;
// }
// function getValues() {
// let number1Elem = document.querySelector('#number1');
// let number1 = number1Elem.value;

// let number2Elem = document.querySelector('#number2');
// let number2 = number2Elem.value;

// const operatorElem = document.querySelector('#operator');
// const operator = operatorElem.value

// number1 = Number(number1);
// number2 = Number(number2);

// return {
//     a: number1,
//     b: number2,
//     action: operator 
// }


// }
// function calc(a, b, action) {
//     let total = 0;
//     switch(a) {
//     case '+':
//         total = a + b;
//         break
//     case '-': 
//         total = a - b;
//         break
//     case '/': 
//         total = a / b;
//         break
//     case '*':
//         total = a * b;
//         break
//     }
// }    

// btn.addEventListener('click', btnClick);

