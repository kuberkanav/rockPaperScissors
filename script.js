/* 

Planning and Pseudocode - 

# declare global score varibales humanScore computerScore and initialize them to 0.

# function getComputerChoice - supposed to return one random vlaue (Rock/Paper/Scissors)
    # Use Math.random to get a random value b/w 0-1 and store it in randomNumber variable.
        # If randomNumber is greater than or equal to 0 and less than equal to 0.33 we go with rock
        # If randomNumber is greater than 0.33 and less than equal to 0.66 we go with paper
        # If randomNumber is greater than 0.66 and less than 1 we go with scissors

# function getHumanChoice
    #humanChoice variable stores the answer it gets from a prompt. (Either rock paper scissor can be the default value)
    #If prompt cancelled - display alert and return false
    #else convert humanChoice to lower case

# function playRound    
    #If getHumanChoice(HC) is equal to getComputerChoice(CC) display result draw.
        #increment both human and computer score by 1.
    #If HC is rock and CC is paper - display you lose!
        #increment computer score by 1.
    #If HC is rock and CC is scissors - display you win!
        #increment human score by 1.
    #If HC is paper and CC is rock - display you win!
        #increment human score by 1.
    #If HC is paper and CC is scissors - display you lose!
        #increment computer score by 1.
    #If HC is scissors and CC is rock - display you lose!
        #increment computer score by 1.
    #If HC is scissors and CC is paper - display you win!
        #increment human score by 1.
    #If anything other than three required - display alert for correct response.

# make a while-loop so that the game runs again and again
    #store getHumanChoice value in a variable (loop)
        #if loop is false then stop while-loop and display final result.
        #else call the playRound function with loop and the return value of getComputerChoice as arguments. + display the current score.
*/


let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){

let humanChoice = prompt("Enter your choice: Rock / Paper / Scissors", "Rock");

if (humanChoice === null) {

    alert("Come back again later!")
    return false;

} else
    return humanChoice = humanChoice.toLowerCase();

}

function getComputerChoice(){

    let randomNumber=Math.random();

    if (randomNumber >= 0 && randomNumber <= 0.33){
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "paper";
    } else 
        return "scissors";

    }

function playRound(HC, CC){
    if (HC === CC) {
        
        humanScore ++;
        computerScore ++;

        return alert("Its a DRAW! Boringggggg....");

    } else if (HC === "rock" && CC === "paper") {

        computerScore ++;
        return alert("I chose Paper, You LOSE :p");
    
    } else if (HC === "rock" && CC === "scissors") {
        
        humanScore ++;
        return alert("Oh no! I chose scissors :( You WIN!");
    
    } else if (HC === "paper" && CC === "rock") {
    
        humanScore ++;
        return alert("Oh no! I chose Rock :( You WIN!");
    
    } else if (HC === "paper" && CC === "scissors") {
    
        computerScore ++;
        return alert("I chose Scissors, You LOSE :p");
    
    } else if (HC === "scissors" && CC === "rock") {
    
        computerScore ++;
        return alert("I chose Rock, You LOSE :p");
    
    } else if (HC === "scissors" && CC === "paper") {
    
        humanScore ++;
        return alert("Oh no! I chose Paper :( You WIN!");
    
    } else 
        return alert("Enter rock, paper or scissors!");
}

while (true){

    const loop= getHumanChoice();
    if (loop === false){

        alert(`The final score was YOU - ${humanScore} vs COMPUTER - ${computerScore}`)
        break;

    } else {
        
        playRound(loop, getComputerChoice());

        alert(`Score is You - ${humanScore} and Me - ${computerScore}`);
    }
}

/*
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */

/* 
if p is null, empty or isNaN then we reprompt
store +prompt in n.
for loop where i=2;i<n;i++
    if(n%i===0) or n<2 then output n is not a prime number
    break
alert n is a prime number
*/