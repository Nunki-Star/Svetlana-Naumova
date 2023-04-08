var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;
while (isSunk==false) {
    guess = prompt("Ready, aim, fire!(enter number from 0-6)");
    if (guess < 0 || guess > 6 ) {
        alert("PLEASE ENTER A VALID NUMBER!");
     } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3 ) {
            alert("hit!!")
            hits = hits + 1
            if ( hits == 3) {
                isSunk = true;
                alert("You sank a buttleship!");
            }
                }else {
                    alert("miss!!!!")
        }
    }
    
 }

 var stats = "You took " + guesses + " guesses to sink the buttleship," + 
    "which means your shooting accuracy was " + (3/guesses);
alert(stats)