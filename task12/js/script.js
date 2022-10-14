
function Calculate(value) {
    this.total = value;
    this.sum = function (number) {
        return this.total += number;
    }
    this.mult = function (number) {
        return this.total *= number;
    }
    this.sub = function (number) {
        return this.total -= number;
    }
    this.div = function (number) {
        return this.total /= number;
    }
    this.result = function() {
        return this.total;
    }

}


const calc = new Calculate(10);
calc.sum(5);
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.result()

const SIZE_SMALL = {price: 20, callories: 70};
// const POTATO = {price: 120, callories: 170};
const hamburger = new Hamburger(SIZE_SMALL);
function Hamburger(hamburgerSize) {
    console.log(hamburgerSize.price);
    console.log(hamburgerSize.callories);

const POTATO = {price: 120, callories: 170};
    this.sum = function () {
        return this.price += this.callories;
    }
    this.getPrice = function() {
        return this.price;
    }
    this.getCallories= function() {
        return this.callories;
    }

}



console.log(hamburger.getPrice())
console.log(hamburger.getCallories())
console.log(hamburger.sum(POTATO))

// calc.sum(5);
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.result()

const hamburger = {price: 10, callories: 30}
console.log(hamburger.price)