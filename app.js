let userScore=0;
let compScore=0;
let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let userScorePara=document.querySelector('#user-choice');
let compScorePara=document.querySelector('#compChoice');
let btn=document.querySelector('button');
//reset button
btn.addEventListener('click',()=>{
    userScorePara.innerHTML='0';
    compScorePara.innerText='0';
    msg.innerHTML='Play your move ';
});
// user choice
choices.forEach((choice) => {
    let userChoice=choice.getAttribute('id');
    choice.addEventListener('click',()=>{
        playGame(userChoice);
    })
});
// computer choice
const gencompChoice=()=>{
    const options=['rock','paper','scissor'];
let ranIdx=Math.floor(Math.random()*3);
return options[ranIdx];
}
// show winner
const showWinner=(userWin)=>{
    if(userWin){
        msg.innerHTML='You win';
        msg.style.backgroundColor='green';
        userScore++;
        userScorePara.innerHTML=userScore;
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerHTML='computer win';
        msg.style.backgroundColor='red';
       
    }
}
// play game
const playGame=(userChoice)=>{
console.log('user choice: ',userChoice);
let compChoice=gencompChoice();
console.log('copmuter choice: ',compChoice);
if(userChoice===compChoice){
msg.innerHTML='Its a draw, play again';
msg.style.backgroundColor='black';
}else{
    let userWin=true;
    if(userChoice==='rock'){
        userWin=compChoice=='paper'?false:true;
    }
    else if(userChoice==='paper'){
        userWin=compChoice=='scissor'?false:true;
    }else{
        userWin=compChoice=='rock'?false:true;
    }
    showWinner(userWin);
}

}