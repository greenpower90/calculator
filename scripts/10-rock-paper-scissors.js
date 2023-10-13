//po načtení stránky se načítá hodnota skore z localStorage + převod z JSON na JS
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
console.log(score);

updateScoreElement();

// vytvoření funkce playGame
function playGame(playerMove) { //parametr playerMove se zadává u tlačítek ve funkci onClick
  computerMove = pickComputerMove(); //proměnné computerMove přiřazujeme tah PC pomocí volání funkce pickComputerMove, která je níže. Po dokončení funkce pickComputerMove se přiřadí hodnota computerMove a pokračuje se v kódu níže.
  let result = '';

  if (playerMove === 'rock') { //kód spuštěn v případě kliknutí na tlačítko Rock
      if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }

    

  } else if (playerMove === 'paper') {//kód spuštěn v případě kliknutí na tlačítko paper
      if (computerMove === 'rock') {
      result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }

      
  } else if (playerMove === 'scissors') {//kód spuštěn v případě kliknutí na tlačítko scissors
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

  

      
  }
  if (result === 'You win.'){
    score.wins += 1;
  } else if (result === 'You lose.'){
    score.losses += 1;
  } else if (result === 'Tie.'){
    score.ties += 1;
  }
  //ukládání skóre od localStorage(hodnota nezmizí po refreshi stránky). localStorage funguje pouze se string, proto převod score pomocí JSON
  localStorage.setItem('score', JSON.stringify(score));

 // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  console.log(score);

  updateScoreElement();
  updateResultElement(result);
  updateMovesElement(playerMove, computerMove);
}

//let result = '';
//let randomNumber = 0;
//let computerMove = '';

function pickComputerMove() {
    let randomNumber = 0;
    randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function updateResultElement(result){
  document.querySelector('.js-result')
  .innerHTML = `Result: ${result} `;
}

function updateMovesElement(playerMove, computerMove){
  document.querySelector('.js-moves')
  .innerHTML = `You <img class="move-icon" src="/icons/${playerMove}-emoji.png">
<img class="move-icon" src="/icons/${computerMove}-emoji.png"> Computer`;
}