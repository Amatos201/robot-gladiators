 HEAD
window.prompt("What is your robot's name?");


// this creates a function named "fight"
function fight() {
    window.alert("The fight(); has begun!");
  }
  fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];


var enemyHealth = 50;
var enemyAttack = 12;

var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
}

console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames);

console.log(enemyNames.length);

// if player picks "skip" confirm and then stop the loop
var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  while(playerHealth > 0 && enemyHealth > 0) {
    // place fight function code block here . . .
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
  }
    }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");

 // award player money for winning
 playerMoney = playerMoney + 20;
 // leave while() loop since enemy is dead
 break;
} else {
 window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
}else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
} // end of while loop
}; // end of fight function
var startGame = function() {
for (var i = 0; i < enemyNames.length; i++) {
  

if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

  var pickedEnemyName = enemyNames[i];

  enemyHealth = 50;
  fight(pickedEnemyName);

}



else {
  window.alert('You have lost your robot in battle! Game Over!');
  break;
}
  // call fight function with enemy-robot
  fight(enemyNames[i]);
}

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}
for (var i = 0; i < enemyNames.length; i++) {
  
 
}

for(var i = 0; i < 3; i++) {
  console.log("apple", i);


  // start the game when the page loads
startGame();
} 
}
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  endGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
  }


fight();
>>>>>>> feature/initial-game
