let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 } 

 const drawGame = () => {
    
    msg.innerText="Game was draw. play again";
    msg.style.backgroundColor ="#081b31";
 }

 const shoWiner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText= compScore;
        msg.innerText = `you Loose.${compChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };
const playGame =(userChoice) => {
const compChoice = genCompChoice();

if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin = true;
    if (userChoice === "rock"){
        if(compChoice == "paper"){
            userWin = false;
        }
        else{
            userWin = true;
        }
    
}

    else if(userChoice === "paper"){
        
            if(compChoice == "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        
    }
    else{
        if(compChoice == "rock"){
            userWin = false;
        }
        else{
            userWin = true;
        }
    }
    shoWiner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
 
    });
});