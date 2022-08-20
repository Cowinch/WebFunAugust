var count=1;
var countElement= document.querySelector("#count");
var likes=1;
var dislikes=1;
function add1(num){
    num++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}
function subtract1(num){
    num-=1;
    countElement.innerText = "The count is " + count;
    console.log(count);
}