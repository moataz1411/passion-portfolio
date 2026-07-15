const btn=document.getElementById("formalbtn");
const profile=document.querySelector(".image img");
const body = document.body;
let formal=false;
btn.onclick=function(){
    formal=!formal;
    body.classList.toggle("formal");
    if(formal){
        profile.src="images/formal-photo.jpeg";
        btn.innerHTML="To Normal";
    }
    else{
        profile.src="images/my-photo.jpeg"
        btn.innerHTML="Formal ME"
    }
}