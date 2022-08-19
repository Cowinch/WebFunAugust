var fruit1="apples";
var fruit2="oranges";

//temp var swap
var temp=fruit2;
fruit2=fruit1;
fruit1=temp;


//destructured swap
[fruit1, fruit2]=[fruit2,fruit1];


//for loop
// for(i=0;i<=12;i++){
//     console.log(i);
// }

// let j=0;
// while(j<=12){
//     console.log(j);
//     return j+=1;
// }




// function finish(start, end){
//     while(start<end){
//         console.log("start: " + start + ", end: " + end);
//         start +=2;
//         end-=2;
//     }
// }
// var first=0;
// var second=12;
// finish(first, second);

let topArtists=["Nipsey Hussle", "Drake", "Ray Charles", "Sam Cooke", "Elivs", "Red Hot Chili Peppers"];

//updating topArtists at index 3 to equal Jamie Fox
// topArtists[3]= "Jamie Fox;"

// console.log(topArtists);
// var left=0;
// var right=topArtists.length-1;
// while(left<right/2){
//     [topArtists[left],topArtists[right]]=[topArtists[right],topArtists[left]];
//     left+=1;
//     right-=1;
// }
// console.log("");
// console.log(topArtists);

// var temperature=60;
// var isRaining=false;

// if(temperature>=50 && !isRaining){
//     console.log("This is a good day to go for a walk");
// }
// console.log(isRaining)

// && is for and, || is for or

for(i=0;i<100;i++){
    if(i%7==0){
        console.log("seventh heaven");
    }
    else{
        console.log(i);
    }
}