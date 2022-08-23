var log=document.getElementById("log");
var juniorLikes=10;
var fluffyLikes=17;

function toggle(){
    if(document.getElementById("log").innerText=="Login"){
        document.getElementById("log").innerText="Logout"
        console.log("changed to Logout")
    }
    else{
        document.getElementById("log").innerText="Login"
        console.log("changed to Login")
    }
}

function deleto(element){//element is the parameter, pop-up-box and upload are arguments
    document.getElementById(element).remove();
}

function likes(element,id){
    if(id=='fluffy'){
        fluffyLikes+=1;
        element.innerText=fluffyLikes+" likes"
        console.log(fluffyLikes);
        console.log(element);
    }
    else if(id=='junior'){
        juniorLikes+=1;
        element.innerText=juniorLikes+" likes"
    }
    setTimeout(runAlert, 10);
    function runAlert(){
        alert("This puppy has " + element.innerText);
    }
    
}

function searchPuppy(){
    //console.log(element.id);
}

function chooseLocation(element){
    console.log("choose", element.value);
    // alert("You are searching for a pet in this location: "+element.value);
    alert(`You are searching for a dog in ${element.value}. Come by Anytime!`) //this are back commas, left of the number 1 on the keyboard
}


