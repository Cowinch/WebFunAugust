var crustType= ["New York Style", "Chicago Style", "Detroit Style", "St. Louis style", "Kansas City Style"];
var cheese= ["Mozzarella", "Cheddar", "Provel", "Parmesan", "Ricotta", "None"];
var sauceType= ["Standard sauce", "Sweet marina sauce", "Barbeque sauce", "Ranch", "Pesto", "None"];
var protein= ["Pepperoni", "Sausage", "Bacon", "Beef", "Chicken", "None"];
var vegetables= ["Green Pepper", "Onion", "Jalapeno", "Black Olive", "Mushroom", "None"];

function generateRandomNumber(min, max) {
    Math.floor(Math.random() * (max - min) + min);
}
function pizzaOven(crust, cheese, sauce, meat, veggies) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.cheese = cheese;
    pizza.sauceType = sauce;
    pizza.protein = meat;
    pizza.vegetables = veggies;
    return pizza;
}
// console.log(pizzaOven("Deep dish","Mozzarella","Standard sauce",["Pepperoni","Sausage"],"None"))
// console.log(pizzaOven("Hand tossed",["Mozzarella","Feta"],"Standard sauce","None",["Mushrooms","Olvies","Onions"]))

function pickRandomTopping(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza(){
    var pizza = {};
    pizza.crustType = pickRandomTopping(crustType);
    pizza.cheese = pickRandomTopping(cheese);
    pizza.sauceType = pickRandomTopping(sauceType);
    pizza.protein = pickRandomTopping(protein);
    pizza.vegetables = pickRandomTopping(vegetables);
    return pizza;
}
console.log(randomPizza())

