
 var lastUl = document.querySelector("ul:nth-child(2)");

lastUl.className = "mojaKlasa";

var allLi = document.querySelectorAll("li");

allLi.forEach(function(element){
    element.className = "aktivni";
})
