var mario = document.querySelector(".mario");
var marioRun = document.querySelector(".marioRun");
var stage = document.querySelector(".stage");
stage.style.backgroundPositionX = '100px';
var interval = "";
var startRunBool = false;

document.addEventListener("keydown", function(){
   
    
    mario.style.display = "none";
    marioRun.style.display = "block";
    
    startRun();
})

document.addEventListener("keyup", function(){
    marioRun.style.display = "none";
    mario.style.display = "block";
    clearInterval(interval);
    startRunBool = false;
})

function startRun() {
    if(!startRunBool){
        console.log("uso u trcanje");
        
        interval = setInterval(groundMove, 50);
        startRunBool = true;
    }
}

function groundMove () {
    stage.style.backgroundPositionX = (parseInt(stage.style.backgroundPositionX) - 10) + 'px';
}