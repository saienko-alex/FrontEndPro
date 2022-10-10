function Hamburger(size) {
    this._size = size;
    this._toppings = [];
}  

Hamburger.SIZE_SMALL = {price: 50, callories: 20};
Hamburger.SIZE_MEDIUM = {price: 75, callories: 30};
Hamburger.SIZE_BIG = {price: 100, callories: 40};

Hamburger.CHEESE = {price: 20, callories: 5};
Hamburger.SALAD = {price: 10, callories: 20};
Hamburger.POTATO = {price: 15, callories: 10};
Hamburger.SEASONING = {price: 15, callories: 0};
Hamburger.MAYO = {price: 20, callories: 5};
 

Hamburger.prototype.addTopping = function(topping) {
    this._toppings.push(topping);

    this.recalculate();
}
Hamburger.prototype.recalculate = function() {
    this._price = this._toppings.reduce(
        (acc, {price}) => (acc += price), 
        this._size.price
        );
    this._callories = this._toppings.reduce(
        (acc, {callories}) => (acc += callories),
         this._size.callories
        );     
}

Hamburger.prototype.getPrice = function() {
    return this._price
}
Hamburger.prototype.getCallories = function() {
    return this._callories
} 

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

 
hamburger.addTopping(Hamburger.POTATO);
hamburger.addTopping(Hamburger.CHEESE);


console.log("Price with sauce: ", +hamburger.getPrice());
console.log("Callories with sauce: ", +hamburger.getCallories());




