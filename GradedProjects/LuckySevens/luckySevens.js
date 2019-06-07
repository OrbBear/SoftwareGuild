
//Function takes an integer and rolls a die of the number.
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}
function clearErrors() {
  for (var loopCounter = 0;
    loopCounter < document.forms["luckySevens"].elements.length;
    loopCounter++) {
      if (document.forms["luckySevens"].elements[loopCounter]
    .parentElement.className.indexOf("has-") != -1) {

      document.forms["luckySevens"].elements[loopCounter]
      .parentElement.className = "form-group";
    }
  }
}
/* The function below should take a positive starting bet and
play the game of sevens until the player loses.

function luckySevens(startingBet){
  //Set game money = startingBet
  var gameMoney = startingBet;
  //Dice variables
  var die1;
  var die2;
  var sumOfDice;
  //Result Variables
  var totalRolls = 0;
  var highestAmountWon = 0;
  var highestAmountRollCount;
  while (gameMoney > 0){
    //Roll 2 6 sided die.
    die1 = rollDice(6);
    die2 = rollDice(6);
    sumOfDice = die1 + die2;
    totalRolls ++;
    //Award player or remove money
    if (sumOfDice = 7){
      gameMoney = gameMoney + 4;
    }
    else{
      gameMoney = gameMoney - 1;
    }
    if (highestAmountWon < gameMoney){
      highestAmountWon = gameMoney;
      highestAmountRollCount = totalRolls;
    }
  }
}
*/
  //Validate user inputs
function validateItems(){
  clearErrors();
  var startingBet = document.forms["luckySevens"]["startingBet"].value;
  if (startingBet <= 0 || isNaN(startingBet)){
    alert("The starting bet must be a positive number.");
    document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["startingBet"].focus();
    return false;
  }
    //Game Logic Begins
    //Set game money = startingBet
    var gameMoney = Number(startingBet);
    //Dice variables
    var die1;
    var die2;
    var sumOfDice;
    //Result Variables
    var totalRolls = 0;
    var highestAmountWon = 0;
    var highestAmountRollCount;
    while (gameMoney > 0){
      //Roll 2 6 sided die.
      die1 = rollDice(6);
      die2 = rollDice(6);
      sumOfDice = die1 + die2;
      totalRolls ++;
      //Award player or remove money
      if (sumOfDice == 7){
        gameMoney = gameMoney + 4;
      }
      else{
        gameMoney = gameMoney - 1;
      }
      if (highestAmountWon < gameMoney){
        highestAmountWon = gameMoney;
        highestAmountRollCount = totalRolls;
      }
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("startingBet1").innerText = startingBet;
    document.getElementById("totalRolls1").innerText = totalRolls;
    document.getElementById("highestAmountWon1").innerText = highestAmountWon;
    document.getElementById("highestAmountRollCount1").innerText = highestAmountRollCount;
    return false;
  }
