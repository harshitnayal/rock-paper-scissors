let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");


const compTurn = () => {
  const options = ["rock", "paper", "scissors"];

  const randomChoice = Math.floor(Math.random() * choices.length);

  const computerChoice = options[randomChoice];
  return computerChoice;
};


 const drawGame = () => {
    msg.textContent = "Match Draw";
    msg.style.backgroundColor = "#4f46e5"
  }

  const userWins = (userChoice, compChoice) => {
    userScore++;
    userPoints.textContent = userScore;
    msg.textContent = `You Win, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#16a34a"
  }

  const compWins = (compChoice, userChoice) => {
    compScore++;
    compPoints.textContent = compScore;
    msg.textContent = `Computer Win, ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "#dc2626"
  }


const playGame = (userChoice) => {
  const compChoice = compTurn();

//   const userWinCond = {
//     firstCond: userChoice === "rock" && compChoice === "scissors",

//     secondCond: userChoice === "paper" && compChoice === "rock",

//     thirdChoice: userChoice === "scissors" && compChoice === "paper",
//   };

  const userWinsCond = (userChoice === "rock" && compChoice === "scissors") || 
                   (userChoice === "paper" && compChoice === "rock")  ||
                   (userChoice === "scissors" && compChoice === "paper")

  

  if (userChoice === compChoice) {
    drawGame()
  } else if (userWinsCond) {
    userWins(userChoice, compChoice);
  } else {
    compWins(compChoice, userChoice);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice);
    let userChoice = choice.id
    playGame(userChoice);
    resetBtn.style.display ="block"
  });
});
