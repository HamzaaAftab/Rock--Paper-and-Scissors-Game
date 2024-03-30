let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "GAME WAS DRAW! PLAY AGAIN";
    msg.style.backgroundColor = "Blue";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = "YOU WIN!";
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "YOU LOSE!";
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("CHOICE CLICKED",userChoice);
        playGame(userChoice);
    })
})
