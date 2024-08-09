let humanScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector("#scoreboard");
const computerChoice = document.querySelector("#computer-choice");
const computerChoiceImg = document.createElement("img");
const computerChoiceText = document.createElement("h2");
computerChoice.appendChild(computerChoiceText);
computerChoice.appendChild(computerChoiceImg);

const currentScore = document.createElement("p");
const roundResult = document.createElement("p");
scoreBoard.appendChild(currentScore);
scoreBoard.appendChild(roundResult);
currentScore.textContent =  'The current score is: ' + humanScore + ':' + computerScore;

function playGame()
{
    let rounds = 1;
    console.log("Welcome to a game of Rock Paper Scissors! we will play 5 rounds.")
    for (let i = 0 ; i<5 ; i++)
    {
        playRound();
    }
    if (humanScore == computerScore)
    {
        console.log("its a tie! Who woudl've thunk it!")
    }
    if (humanScore>computerScore)
    {
        console.log("You win! You magnificent human being!");
    }
    else
    {
        console.log("You lose! try again next time!")   
    }
}

function playRound()
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let output = "";
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase())
    {
        console.log("This round is a tie!");
        roundResult.textContent = "This round is a tie!";
    }
    else 
    {
        if (humanChoice.toLowerCase() == "rock")
            {
            if (computerChoice.toLowerCase() == "paper")
            {
                computerScore++;
                output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                // console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
                // scoreLine.textContent = "You lose this round! " + computerChoice + " beats " + humanChoice;
            }
            else
            {
                humanScore++;
                output = "You win this round! " + humanChoice + " beats " + computerChoice;
                // console.log("You win this round! " + humanChoice + " beats " + computerChoice);
                // scoreLine.textContent = "You win this round! " + humanChoice + " beats " + computerChoice;
            }
        }
        if (humanChoice.toLowerCase() == "paper")
            {
            if (computerChoice.toLowerCase() == "scissors")
            {
                computerScore++;
                output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                // console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
                // scoreLine.textContent = "You lose this round! " + computerChoice + " beats " + humanChoice;
            }
            else
            {
                humanScore++;
                output = "You win this round! " + humanChoice + " beats " + computerChoice;
                // console.log("You win this round! " + humanChoice + " beats " + computerChoice);
                // scoreLine.textContent = "You win this round! " + humanChoice + " beats " + computerChoice;
            }
        }
        if (humanChoice.toLowerCase() == "scissors")
            {
            if (computerChoice.toLowerCase() == "rock")
            {
                computerScore++;
                output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                // console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
                // scoreLine.textContent = "You lose this round! " + computerChoice + " beats " + humanChoice;
            }
            else
            {
                humanScore++;
                output = "You win this round! " + humanChoice + " beats " + computerChoice;
                // console.log("You win this round! " + humanChoice + " beats " + computerChoice);
                // scoreLine.textContent = "You win this round! " + humanChoice + " beats " + computerChoice;
            }
        }
        currentScore.textContent =  'The current score is: ' + humanScore + ':' + computerScore;
        console.log(output);
        roundResult.textContent = output;
    }
}

function getComputerChoice()
{
    computerChoiceText.textContent = "Computer choice:";
    computerChoiceImg.src = "https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png";
    computerChoiceImg.alt = "Rock hand sign";
    let choice = "rock";
    let randomNum = Math.random();
    if (randomNum<=0.33)
    {
        choice = "scissors";
        computerChoiceImg.src = "https://i.imgur.com/t0hFxnt.png";
        computerChoiceImg.alt = "Scissors hand sign";
    }
    else if (randomNum<=0.66)
    {
        choice = "paper";
        computerChoiceImg.src = "https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png";
        computerChoiceImg.alt = "Paper hand sign";
    }
    return choice;
}

// function getHumanChoice()
// {
//     if (button == null)
//     {
//         let choice = prompt("Choose: Rock, Paper or Scissors!");
//         if (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors")
//         {
//             console.log(choice+" is not a legal choice! please choose either rock, paper or scissors only.");
//             return getHumanChoice();
//         }
//         else
//         {
//             return choice;
//         }
//     }
//     else
//     {
//         return button;
//     }
// }

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

//ADD TEXT FUNCTIONALITY TO THIS INSTEAD
// adding listeners to buttons to play a round
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function (e){
        const humanChoice = this.className;
        const computerChoice = getComputerChoice();
        let output = "";
        if (humanChoice.toLowerCase() == computerChoice.toLowerCase())
        {
           output = "This round is a tie!";
        }
        else
        {
            if (humanChoice.toLowerCase() == "rock")
                {
                if (computerChoice.toLowerCase() == "paper")
                {
                    computerScore++;
                    output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                }
                else
                {
                    humanScore++;
                    output = "You win this round! " + humanChoice + " beats " + computerChoice;
                }
            }
            if (humanChoice.toLowerCase() == "paper")
                {
                if (computerChoice.toLowerCase() == "scissors")
                {
                    computerScore++;
                    output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                }
                else
                {
                    humanScore++;
                    output = "You win this round! " + humanChoice + " beats " + computerChoice;
                }
            }
            if (humanChoice.toLowerCase() == "scissors")
                {
                if (computerChoice.toLowerCase() == "rock")
                {
                    computerScore++;
                    output = "You lose this round! " + computerChoice + " beats " + humanChoice;
                }
                else
                {
                    humanScore++;
                    output = "You win this round! " + humanChoice + " beats " + computerChoice;
                }
            }
        }
        currentScore.textContent =  'The current score is: ' + humanScore + ':' + computerScore;
        console.log(output);
        roundResult.textContent = output;
    })
});