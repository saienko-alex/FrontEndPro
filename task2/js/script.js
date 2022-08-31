let operndA 

do {
    operndA = prompt('Напишите первое число')
} while(operndA === null || operndA === '' || isNaN(operndA));
operndA = Number(operndA)


let operndB

do {
    operndB = prompt('Напишите второе число')
} while(operndB === null || operndB === '' || isNaN(operndB));
operndB = Number(operndB)


let action

do {
    action = prompt('Напишите действие')
} while(action !== '+' && action !== '-' && action !== '/' && action !== '*');


let result

switch(action) {
    case '+':
        result = operndA + operndB;
        break
    case '-': 
        result = operndA - operndB;
        break
    case '/':
        result = operndA / operndB;
        break
    case '*':
        result = operndA * operndB; 
        break
}

alert(`${operndA} ${action} ${operndB} = ${result}`);


















let action

while(action !== '+' || action != '-' || action != '/' || action != '*') {
    action = prompt('Напишите действие?');
}

let action
const validAction =
action === '+' || action === '-' || action === '/' || action === '*';
do {
    action = prompt('Напишите действие')
} while(validAction);


function isActionValid(action) {
    return action !== '+' || action !== '-' || action !== '/' || action !== '*'
}


console.log(action);





let action
const validAction = 
action === '+' || action === '-' || action === '/' || action === '*';

switch(validAction) {
    case '+':
    case '-': 
    case '/':
    case '*': 
        break
    default:
        action =  prompt('Напишите действие?');
}


let operndB = prompt('Напишите второе число?');
operndB = Number(operndB)

while(operndB === null || operndB === '' || operndB === isNaN) {
    operndB = prompt('Напишите первое число?');
}


let result

switch(action) {
    case '+':
        result = operndA + operndB;
        break
    case '-': 
        result = operndA - operndB;
        break
    case '/':
        result = operndA / operndB;
        break
    case '*':
        result = operndA * operndB; 
        break
}


alert(`${operndA} ${action} ${operndB} = ${result}`);

// let action =  prompt('Напишите действие?');

// switch

// if(action !== '+' || action !== '-' || action !== '/' || action !== '*') {
//     action =  prompt('Напишите действие?');
// }

// while(action !== '+' || action !== '-' || action !== '/' || action !== '*') {
//     action =  prompt('Напишите действие?');
// }





// let result = +operndA + +operndB;


// alert(`${operndA} + ${operndB} = ${result}`);



let operndA 

do {
    operndA = prompt('Напишите первое число')
} while(operndA === null || operndA === '' || isNaN(operndA));

operndA = Number(operndA)
console.log(operndA);
console.log(typeof operndA);

let operndB

do {
    operndB = prompt('Напишите второе число')
} while(operndB === null || operndA === '' || isNaN(operndA));

operndB = Number(operndB)
console.log(operndB);
console.log(typeof operndB);

let action

while(action !== '+' || action !== '-' || action !== '/' || action !== '*') {
    action = prompt('Напишите действие?');
}

let action

do {
    action = prompt('Напишите действие')
} while(action !== '+' || action !== '-' || action !== '/' || action !== '*');


console.log(action);





let action
const validAction = 
action === '+' || action === '-' || action === '/' || action === '*';

switch(validAction) {
    case '+':
    case '-': 
    case '/':
    case '*': 
        break
    default:
        action =  prompt('Напишите действие?');
}


let operndB = prompt('Напишите второе число?');
operndB = Number(operndB)

while(operndB === null || operndB === '' || operndB === isNaN) {
    operndB = prompt('Напишите первое число?');
}


let result

switch(action) {
    case '+':
        result = operndA + operndB;
        break
    case '-': 
        result = operndA - operndB;
        break
    case '/':
        result = operndA / operndB;
        break
    case '*':
        result = operndA * operndB; 
        break
}


alert(`${operndA} ${action} ${operndB} = ${result}`);




let action

do {
    action = prompt('Напишите действие')
} while(action !== '+' && action !== '-' && action !== '/' && action !== '*');

let action

do {
    action = prompt('Напишите действие')
} while(action !== '-' && action !== '+' && action !== '*');