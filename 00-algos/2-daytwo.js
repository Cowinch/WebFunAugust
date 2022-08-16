// var amazingShow1 = "Curb your enthusiasm is #1 ! yay :)";// this is a variable that is equal to a string
// var magicsNumber = 32;

// amazingShow1= "The office";//

// var isRobSpeakingFactsAboutBasketball=false;//boolean

// var greatestArtists = ["Drake","Kanye","Taylor Swift",]

//a data structure is something that can store multiple data types (arrays, objects(hash maps), trees, linked lists... ect;)

// var randomNums =[23,0,77];
// var mixedArray=["Potato",5,false,true,9];//individual things in an array are called elements

// console.log(greatestArtists[5])

// for(var num=1;num<=100;num++){
//     console.log(num)
// }
// console.log("finished");
//control + ? makes a line commented

// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }

// console.log("outside of the loop " + i);
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }
    console.log("the total is: " + sum);
}
getTotal([1, 3, 5]);