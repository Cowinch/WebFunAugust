var toggleValue=document.querySelector("#login")
var loginToggle = true;
var deleteValue=document.querySelector("#definition")
function toggle(){
    if(loginToggle==true){
        toggleValue.innerText="Logout";
        loginToggle=false;
    }
    else{
        toggleValue.innerText="Login";
        loginToggle=true;
    }
}
function deleto(element){
    element.remove();
}