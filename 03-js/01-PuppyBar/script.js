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

function deleto(element){
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


