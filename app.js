let gameSeq = [];
let userSeq = [];

let btn = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

// Button Flash
function btnFlash(btnElement){
    btnElement.classList.add("flash");
    setTimeout(function(){
        btnElement.classList.remove("flash");
    }, 300);
}

// Level Up
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btn[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);

    gameSeq.push(randColor);
    btnFlash(randbtn);
} 

function btnPress(){
    let btn = this.classList[1]; // Assuming class name format is "btn color"
    userSeq.push(btn);
    btnFlash(this);

    // Check user sequence
    checkAnswer(userSeq.length - 1);
}

function checkAnswer(currentLevel) {
    if (userSeq[currentLevel] === gameSeq[currentLevel]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(function() {
                userSeq = [];
                levelUp();
            }, 1000);
        }
    } else {
        console.log("Game Over");
        startOver();
    }
}

function startOver() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
    h2.innerText = "Game Over, Press Any Key to Start";

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";

    }, 800);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
