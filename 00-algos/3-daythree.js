var favFoods = ["Calamari", "Pho", "Pizza", "Sushi", "Medium-rare steak", "Tacos", "Korean BBQ", "Chipotle"]
//elements are the values in the array (Calamari, Pho, ect.) NOT to be confused with the element term in HTML
//Indexes are the numbers the COMPUTER stores (0,1,2, ec.t) starting at 0)

// console.log(favFoods[3]);
// for (i = 0; i < favFoods.length; i++) {
//     if(favFoods[i]=="Sushi"){
//         console.log("inflation doe" + favFoods[i])
//     }
//     else if(favFoods[i]=="Chipotle"){

//     }
//     else{
//         console.log(favFoods[i])
//     }
// }


// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if (isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if (temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if (isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
for(i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        countPositives+=1;
    }
}
console.log("there are " + countPositives + " positive values");

