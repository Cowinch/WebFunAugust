var pizza={
    crustType: ["New York Style", "Chicago Style","Detroit Style", "St. Louis style", "Kansas City Style"],
    cheese: ["Mozzarella", "Cheddar", "Provel", "Parmesan","Ricotta"],
    sauceType:["Standard sauce","Sweet marina sauce","Barbeque sauce","Ranch","Pesto"],
    protein: ["Pepperoni","Sausage","Bacon","Beef","Chicken"],
    vegetables:["Green Pepper","Onion","Jalapeno","Black Olive","Mushroom"],
}
function generateRandomNumber(min,max){
    Math.floor(Math.random()*(max-min+1)+min);
}
function pizzaOven(crust,cheese,sauce,meat,veggies){
    var pizza={};
    pizza.crustType=crust;
    pizza.cheese=cheese;
    pizza.sauceType=sauce;
    pizza.protein=meat;
    pizza.vegetables=veggies;
    return pizza;
}
console.log(pizzaOven())