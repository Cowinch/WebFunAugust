function updateLikes(element){
    // let count=document.getElementById(element).innerText;
    // count++;
    // document.getElementById(element).innerText=count;
    document.getElementById(element).innerText=parseInt(document.getElementById(element).innerText)+1;
}

var whiteBackground=document.querySelectorAll(".wb");
var blackBackground=document.querySelectorAll(".bb");
var border=document.querySelectorAll(".b");
var whiteColor=document.querySelectorAll(".wc");
var blackColor=document.querySelectorAll(".bc");

function turnOnTheLights(){
    for(i=0;i<whiteBackground.length;i++){
        whiteBackground[i].style.backgroundColor="white";
    }
    for(i=0;i<blackBackground.length;i++){
        blackBackground[i].style.backgroundColor="black";
    }
    for(i=0;i<whiteColor.length;i++){
        whiteColor[i].style.color="white";
    }
    for(i=0;i<border.length;i++){
        border[i].style.border="3px solid black";
    }
    for(i=0;i<blackColor.length;i++){
        blackColor[i].style.color="black";
    }
}

function turnOffTheLights(){
    for(i=0;i<whiteBackground.length;i++){
        whiteBackground[i].style.backgroundColor="black";
    }
    for(i=0;i<blackBackground.length;i++){
        blackBackground[i].style.backgroundColor="white";
    }
    for(i=0;i<whiteColor.length;i++){
        whiteColor[i].style.color="black";
    }
    for(i=0;i<border.length;i++){
        border[i].style.border="3px solid white";
    }
    for(i=0;i<blackColor.length;i++){
        blackColor[i].style.color="white";
    }
}