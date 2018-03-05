
var mainDiv = document.querySelector(".ourDiv");
var input = document.querySelector("input");
var button = document.querySelector("button");

button.onclick = function (){
    if(input.value === ""){
        return;
    }
    var p = document.createElement("p");
    var pText = document.createTextNode(input.value);
    p.appendChild(pText);
    mainDiv.appendChild(p);
    input.value = "";
}

 