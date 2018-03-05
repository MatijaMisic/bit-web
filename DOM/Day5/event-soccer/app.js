"use strict";

var player = document.querySelector(".player");

var body = document.querySelector("body");


body.addEventListener('click', movePlayer);

function movePlayer(event) {
   
    player.style.top = (event.clientY - (player.height/2)) +"px";
    player.style.left = (event.clientX - (player.width/2)) +"px";
    
}

document.querySelector(".btn").addEventListener("click", function() {
    console.log("click");
    
    body.removeEventListener('click', movePlayer);
});