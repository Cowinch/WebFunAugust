function updateLikes(element){
    let count=document.getElementById(element).innerText;
    count++;
    document.getElementById(element).innerText=count;
    console.log(element);
    console.log(count);
}