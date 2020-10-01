const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump(){
    if (dino.classList !== "jump"){
        dino.classList.add("jump");
        setTimeout(function (){
            dino.classList.remove("jump");
        }, 300);
    }}
let checkGameOver = setInterval(function (){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")),
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 120){
        alert("Game Over My Friend ");
        document.location.reload(jump());
    }
})
confirm("Do you want to Play Dino?? ");
document.addEventListener("keydown", function (event){
    jump();
})