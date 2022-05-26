let wp = 0;
let wc = 0;
let t = 0;

const buttons = document.querySelectorAll('input')

function computerPlay(){
    let play = Math.floor(Math.random()* (+3 + 1 - +1)) + +1;
    if (play == 1){
        return "rock";
    }   

    if (play == 2){
        return "paper";
    }

    else{
        return "scissors";
    }
}

let computerSelection = computerPlay();
function match(){
    let playerSelection = prompt("Choose Between Rock Paper And Scissors");
    playerLower = playerSelection.toLocaleLowerCase();

    if (playerLower == "rock"){
        if (computerSelection == "rock"){
            a = "Tie!"
            alert(a);
        }

        else if (computerSelection == "paper"){
            a = "You Lost!"
            alert(a + ": Paper beat Rock");
        }

        else if (computerSelection == "scissors"){
            a = "You won!"
            alert(a + ": Rock beat Scissors");
        }
    }

    if (playerLower == "paper"){
        if (computerSelection == "rock"){
            a = "You Won!"
            alert(a + ": Paper beat Rock");
        }

        else if( computerSelection == "paper"){
            a = "Tie!"
            alert(a)
        }

        else if (computerSelection == "scissors"){
            a = "You Lost!"
            alert(a + ": Scissors beat Paper")
        }

    }

    if (playerLower == "scissors"){
        if (computerSelection == "rock"){
            a = "You Lost!"
            alert(a + ": Rock beat Scissors");
        }

        else if( computerSelection == "paper"){
            a = "You Won!"
            alert(a + ": Scissors beat Paper")
        }

        else if (computerSelection == "scissors"){
            a = "Tie!"
            alert(a)
        }
    }

    else{
        b = "enter a valid input and reload the page"
        alert(b);
    }

    if (a == "You Won!"){
        wp = wp + 1;
        alert("You have won: " + wp + ", Computer have won: " + wc + ", Ties: " + t)
    }

    else if (a == "You Lost!"){
        wc = wc + 1;
        alert("You have won: " + wp + ", Computer have won: " + wc + ", Ties: " + t)
    }

    else if(a == "Tie!"){
        t = t + 1;
        alert("You have won: " + wp + ", Computer have won: " + wc + ", Ties: " + t)
    }
}

for (let i = 0; i < 5; i++) {
    match();   
}
