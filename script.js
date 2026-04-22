/* 
# function getComputerChoice - supposed to return one random vlaue (Rock/Paper/Scissors)
    # Use Math.random to get a random value b/w 0-1 and store it in randomNumber variable.
        # If randomNumber is greater than or equal to 0 and less than equal to 0.33 we go with rock
        # If randomNumber is greater than 0.33 and less than equal to 0.66 we go with paper
        # If randomNumber is greater than 0.66 and less than 1 we go with scissors
*/

function getHumanChoice(){

    let humanChoice = prompt("Enter your choice: Rock / Paper / Scissors", "Rock");

    return humanChoice = humanChoice.toLowerCase();

}
/*  
# function getHumanChoice
    #humanChoice variable stores the answer it gets from a prompt. (Either rock paper scissor can be the default value)
    #Convert and save humanChoice as lower case and return it.
*/

function getComputerChoice(){

    let randomNumber=Math.random();

    if (randomNumber >= 0 && randomNumber <= 0.33){
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "paper";
    } else 
        return "scissors";

    }

/*  
#function playGame which calls playRound 5 times and displays end results

    # Declare humanScore, computerScore and initialize them to 0.
    # A for loop for 5 iterations:
        #declare humanChoice and compChoice with returns from getHumanChoice and getComputerChoice functions.
        #call playRound with humanChoice and compChoice as arguments

    #Display the final scores
    #Display a message for overall win/loss. (Draw is another possibility but I was lazy for an if loop insated worked it with ternary operator)

    #Define function playRound with arguments HC and CC
        #If getHumanChoice(HC) is equal to getComputerChoice(CC) display result draw.
            #no change in scores (do nothing)
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
*/

function playGame (){
        
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 4; i>=0; i--) {

        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
            
    }

    console.log(`The final score is You - ${humanScore} and Me - ${computerScore}`)

    humanScore>computerScore ? console.log("Arghhh. You WIN this time!") : console.log("Easy Win for me :)")


            function playRound(HC, CC){
                
                if (HC === CC) {

                    return console.log("Its a DRAW! Boringggggg....");

                } else if (HC === "rock" && CC === "paper") {

                    computerScore ++;
                    return console.log("I chose Paper, You LOSE :p");
                
                } else if (HC === "rock" && CC === "scissors") {
                    
                    humanScore ++;
                    return console.log("Oh no! I chose scissors :( You WIN!");
                
                } else if (HC === "paper" && CC === "rock") {
                
                    humanScore ++;
                    return console.log("Oh no! I chose Rock :( You WIN!");
                
                } else if (HC === "paper" && CC === "scissors") {
                
                    computerScore ++;
                    return console.log("I chose Scissors, You LOSE :p");
                
                } else if (HC === "scissors" && CC === "rock") {
                
                    computerScore ++;
                    return console.log("I chose Rock, You LOSE :p");
                
                } else if (HC === "scissors" && CC === "paper") {
                
                    humanScore ++;
                    return console.log("Oh no! I chose Paper :( You WIN!");
                
                } else 
                    return console.log("Enter rock, paper or scissors!");
            }
    }
    
    // calling the playGame function

    playGame ();
   
