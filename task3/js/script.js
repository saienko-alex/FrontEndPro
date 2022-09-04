
function getOperand(title) {
    let value = prompt(title);
    while(isOperandInvalid(value)) {
       value = prompt(title);
   }
   return value;
}

function isOperandInvalid(value) {
    return value === null || value.trim() === '' || isNaN(value) || value <= 0;
}

let evenSum = 0;
function getEvenSum(operandA) {
    let i = 0;
    while (i <= operandA) {
        evenSum += i;
        i = i+2
    }
    return evenSum;
}  

let oddSum = 0;
function getOddSum(operandA) {
    let i = 1;
    while (i <= operandA) {
        oddSum += i;
        i = i+2
    }
    return oddSum;
}  


let operandA = getOperand('Введите число?');
let evenNumbers = getEvenSum(operandA);
let oddNumbers = getOddSum(operandA);
alert(`сумма четных: ${evenNumbers}`);
alert(`сумма нечетных: ${oddNumbers}`);



