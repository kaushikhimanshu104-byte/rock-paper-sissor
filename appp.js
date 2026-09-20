let userscore=0;
let comscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const u =document.querySelector("#user-score");
const c=document.querySelector("#comp-score");

const gencompchoice =() =>{
  let options=["rock" , "paper" , "scissor"];
  let randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
}

const draw=()=>{
  console.log("game is draw");
  msg.innerText="game is draw / play again";
};

const showWinner=(userwin) =>{
   if(userwin){
    console.log("user win");
    msg.innerText="You Win";
    userscore++;
    u.innerText=userscore;
   }else{
    console.log("user lose");
    msg.innerText="You lose";
    comscore++;
    c.innerText=comscore;
   }
};

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);

    let compchoice = gencompchoice();
    console.log("comp choice=", compchoice);

    if (userchoice === compchoice) {
        draw();
        return;
    }

    let userwin = true;

    if (userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true;
    } 
    else if (userchoice === "paper") {
        userwin = compchoice === "scissor" ? false : true;
    } 
    else {
        userwin = compchoice === "rock" ? false : true;
    }

    showWinner(userwin);
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
     
      const userchoice = choice.getAttribute("id");

  
       playgame(userchoice);
    });
});