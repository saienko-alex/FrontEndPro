

Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_MEDIUM = {price: 75, calories: 30};
Hamburger.SIZE_BIG = {price: 100, calories: 40};

Hamburger.CHEESE = {price: 20, calories: 5};
Hamburger.SALAD = {price: 10, calories: 20};
Hamburger.POTATO = {price: 15, calories: 10};
Hamburger.SEASONING = {price: 15, calories: 0};
Hamburger.MAYO = {price: 20, calories: 5};


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

function Hamburger(hamburgerSize) {
    this.price = hamburgerSize.price;
    this.calories = hamburgerSize.calories;
}    

Hamburger.prototype.addTopping = function(ingridients) {
    this.getPrice(ingridients.price);
    this.getCallories(ingridients.calories);
}
Hamburger.prototype.getPrice = function(price) {
    return this.price += price; 
}
Hamburger.prototype.getCallories = function(calories) {
    return this.calories += calories;
} 
hamburger.addTopping(Hamburger.POTATO);
hamburger.addTopping(Hamburger.CHEESE);


console.log("Price with sauce: ", +hamburger.getPrice(0));
console.log("Callories with sauce: ", +hamburger.getCallories(0));




