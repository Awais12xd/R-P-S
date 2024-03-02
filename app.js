let userScore = 0;
let compScore = 0;
let compChoice;
let userOption;
let msgBtn = document.querySelector(".infoBtn");
let uscore = document.querySelector(".user-score");
let cscore = document.querySelector(".comp-score");
let resetBtn = document.querySelector(".resetbtn");


const options = document.querySelectorAll(".option");

let showWinner = (user,userOption,compChoice) => {
    if(user){
        msgBtn.innerText = `You win with ${userOption } from ${compChoice}`;
        msgBtn.style.backgroundColor="green";
        msgBtn.style.color="white";
        userScore++;
        uscore.innerText=`${userScore}`;
    }
    else{
        msgBtn.innerText = `You lose with ${userOption } from ${compChoice}`;
        msgBtn.style.backgroundColor="red";
        msgBtn.style.color="white";
        compScore++;
        cscore.innerText=`${compScore}`;
    }
}
let genCompChoice = () => {
    let choices = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return choices[randIdx];
}
let drawGame = () => {
    msgBtn.innerText = "";
    msgBtn.innerText = "The Game is Draw";
    msgBtn.style.backgroundColor="blue";
    msgBtn.style.color="white";
}
let gamePlay = (userOption) => {
     compChoice = genCompChoice();
    if( userOption === compChoice ){
      drawGame();
    }
    else{
        let user = true ;
        if( userOption === "rock"){
            user = compChoice === "scissors" ? true : false ;
        }
        else if(userOption === "paper"){
            user = compChoice === "rock" ? true : false ;
        }
        else{
            user = compChoice === "rock" ? false : true ;
        }
        showWinner(user, userOption,compChoice);

    }

}

options.forEach( (option) => {
    option.addEventListener("click", () => {
        userOption = option.getAttribute("id");
        gamePlay(userOption);
    });
});
let reset = () => {
    uscore.innerText = "0";
    cscore.innerText="0";
    msgBtn.innerText="Choose any Option"
    msgBtn.style.backgroundColor="white";
    msgBtn.style.color="black";
userScore = 0;
 compScore = 0;
}
resetBtn.addEventListener("click",reset);