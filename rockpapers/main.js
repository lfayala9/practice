let userScore = 0;
let computerScore = 0;
let winner = ''

function randomChoice(){
    let numberRandom = Math.floor(Math.random()* 3)
    if (numberRandom === 0){
        return 'ROCK'
    }
    else if (numberRandom === 1){
        return 'PAPER'
    }
    else{
        return 'SCISSORS'
    }
}

function match(computerChoice, userChoice){
    if(userChoice === computerChoice){
        winner = 'tie'
    }
    if(
    (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
    (userChoice === 'PAPER' && computerChoice === 'ROCK')
    ){
        userScore++
        winner = 'user'
    }
    if(
    (computerChoice === 'ROCK' && userChoice === 'SCISSORS') ||
    (computerChoice === 'SCISSORS' && userChoice === 'PAPER') ||
    (computerChoice === 'PAPER' && userChoice === 'ROCK')
    ){
        computerScore++
        winner = 'computer'
    }
    scoreMessage(winner, userChoice, computerChoice)
}

function over(){
    if(userScore === 5){
        alert('You WON, Play again if you want')
        ending()
    }
    else if (computerScore === 5){
        alert('You LOST, Play Again if you Want')
        ending()
    }

}
const scoreInfo = document.getElementById('info')
const scoreMsg = document.getElementById('message')
const rockBtn = document.getElementById('rock_')
const paperBtn = document.getElementById('paper_')
const sciBtn = document.getElementById('sci_')
const userScoreScreen = document.getElementById('userScore')
const computerScoreScreen = document.getElementById('computerScore')

rockBtn.addEventListener('click', () => clickPlay('ROCK'))
paperBtn.addEventListener('click', () => clickPlay('PAPER'))
sciBtn.addEventListener('click', () => clickPlay('SCISSORS'))


function clickPlay(userChoice){
    
    const computerChoice = randomChoice();
    match(userChoice, computerChoice)
    scoreScreen()

    over()
}

function scoreScreen() {
    if (winner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (winner === 'user') {
      scoreInfo.textContent = 'You won!'
    } else if (winner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    userScoreScreen.textContent = ` ${userScore}`
    computerScoreScreen.textContent = ` ${computerScore}`
  }

  function scoreMessage(winner, userChoice, computerChoice){
    if(computerChoice === userChoice){
        scoreMsg.textContent = `${userChoice} ties with ${computerChoice}`
    }
    else if(winner === 'user'){
        scoreMsg.textContent = `${userChoice} beats ${computerChoice}`
    }
    else if(winner === 'computer'){
        scoreMsg.textContent = `${computerChoice} beats ${userChoice}`
    }
  }

function ending(){
    userScore = 0;
    computerScore = 0;
    scoreMsg.textContent = 'First to win five, wins the game'
    scoreInfo.textContent = 'CHOOSE'
}