let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg= document.querySelector("#msg");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
};

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerHTML="Draw Game!";
    msg.style.backgroundColor="orange";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        console.log("You win!");
        msg.innerHTML=`You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You loose!");
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`You Lost! computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice= genCompChoice();
    console.log("computer choice ",compChoice);

    if(userChoice==compChoice){
        drawGame(); 
    }
    else{
        let userWin=true;
        if(userChoice ==="rock"){
            userWin=compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

