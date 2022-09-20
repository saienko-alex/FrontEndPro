let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let action= document.querySelector('#action');
const btn = document.querySelector('#calculateButton');
const resultStroke = document.querySelector('#result');

 
function btnClick() {
    switch(action.value) {
    case '+':
        total = Number(number1.value) + Number(number2.value);
        break
    case '-': 
        total = Number(number1.value) - Number(number2.value);
        break
    case '/':
        total = Number(number1.value) / Number(number2.value);
        break
    case '*':
        total = Number(number1.value) * Number(number2.value); 
        break
}
    resultStroke.innerHTML = `${number1.value} ${action.value} ${number2.value} = ${total}`;
}

btn.addEventListener('click', btnClick);


