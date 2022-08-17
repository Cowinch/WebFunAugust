//1. Print odds 1-20
console.log("Print odds 1-20")
for(i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
    }
}
//2. Decreasing Multiples of 3
console.log("Decreasing Multiples of 3")
for(i=100;i>0;i--){
    if(i%3==0){
        console.log(i);
    }
}
//3. Print the sequence
console.log("Print the sequence")
var arr=[4,2.5,1,-.5,-2,-3.5]
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//4.Sigma
console.log("Sigma");
var sum=0;
for(i=1;i<=100;i++){
    sum=sum+i;
}
console.log(sum);
//.5 Factorial
console.log("Factorial");
var factorialSum=1;
for(i=1;i<=12;i++){
    factorialSum=factorialSum*i;
}
console.log(factorialSum);
