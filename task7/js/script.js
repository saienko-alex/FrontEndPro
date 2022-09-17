
let sum = 0
function createCalculator(sum) {
    
    return {
        sum: function(num) {
            return  sum += num;
        }, 
        mult: function(num) {
            return sum *= num;
        },
        sub: function(num) {
            return sum -= num; 
        },  
        div: function(num) {
            return sum /= num; 
        },
        set: function(num) {
            return sum = num; 
        }  
    };
  
}  

const calc = createCalculator(10);
calc.sum(5); 
calc.mult(10); 
calc.sub(40); 
calc.div(10); 
calc.set(100);









function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (number) {
    return (this.total += number);
}

Calculator.prototype.substract = function (number) {
    return (this.total -= number);
}

Calculator.prototype.multiply = function (number) {
    return (this.total *= number);
}

let cal = new Calculator(100)
cal.add(10)
