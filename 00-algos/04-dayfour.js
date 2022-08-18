// function greet(){
//     //inside the body of the function
//     console.log("Hello!");
// }

// greet();

// function greetSomeone(name){//usage of parameter var name is the paramter
//     console.log(name)
// }
// greetSomeone("Cole");//this is called an argument, inserting info for the paramter is use, "Cole" is the argument

// var x=5;
// function setX(newValue){
//     x=newValue;
// }
// console.log(x);
// setX(15);
// console.log(x);

// function addNums(num1, num2){
//     console.log(num1+num2);//console.log just prints something to the console/terminal
// }
// let newNum= addNums(5,2)+100;
// console.log(newNum);//because return was never set, it returns NaN (Not a Number)

//the value of a function call is whatever that function call returns

// function addNums(num1, num2) {
//     return num1 + num2;//return forces the code to exit the function. No code after it will run
//     console.log(num1+num2);//this line will never run as its after return
// }
// let newNum = addNums(5, 2) + 100;
// console.log("newNum is this " +  newNum);

function isPal(arr){
    for(var left=0;left<arr.length/2;left++){
        var right=arr.length-1-left;
        if(arr[left]!=arr[right]){
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome";
}
console.log(isPal([1,1,2,2,1]));
//
console.log(isPal([3,2,1,1,2,3]));