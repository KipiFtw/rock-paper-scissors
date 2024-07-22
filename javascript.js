let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase())
    {
        console.log("This round is a tie!");
    }
    else 
    {
        if (humanChoice.toLowerCase() == "rock")
            {
            if (computerChoice.toLowerCase() == "paper")
            {
                computerScore++;
                console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
            }
            else
            {
                humanScore++;
                console.log("You win this round! " + humanChoice + " beats " + computerChoice);
            }
        }
        if (humanChoice.toLowerCase() == "paper")
            {
            if (computerChoice.toLowerCase() == "scissors")
            {
                computerScore++;
                console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
            }
            else
            {
                humanScore++;
                console.log("You win this round! " + humanChoice + " beats " + computerChoice);
            }
        }
        if (humanChoice.toLowerCase() == "scissors")
            {
            if (computerChoice.toLowerCase() == "rock")
            {
                computerScore++;
                console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
            }
            else
            {
                humanScore++;
                console.log("You win this round! " + humanChoice + " beats " + computerChoice);
            }
        }
    }
}

function getComputerChoice()
{
    let choice = "rock";
    let randomNum = Math.random();
    if (randomNum<=0.33)
    {
        choice = "scissors";
    }
    else if (randomNum<=0.66)
    {
        choice = "paper";
    }
    return choice;
}

function getHumanChoice()
{
    let choice = prompt("Choose: Rock, Paper or Scissors!");
    if (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors")
    {
        console.log(choice+" is not a legal choice! please choose either rock, paper or scissors only.");
        return getHumanChoice();
    }
    else
    {
        return choice;
    }
}