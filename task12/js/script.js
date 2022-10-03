
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


