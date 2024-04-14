var options;
var boolOptions;
var floatOptions;
var selectedOption;
var NewValue;
var gameOverOld;

options = ["Invincible", "Speed", "SetScore"];
boolOptions = [0];
floatOptions = [1, 2];
selectedOption = null;
NewValue = 0;

// Retrieve the original value of gameOver from localStorage
var gameOverOld = localStorage.getItem('gameOverOld');
if (!gameOverOld) {
    localStorage.setItem('gameOverOld', Runner.prototype.gameOver);
    gameOverOld = Runner.prototype.gameOver;
}
    
// Display options in a prompt-like manner
var optionString = options.map(function(option, index) {
    return (index + 1) + '. ' + option;
}).join('\n');
var input = prompt('Select an option:\n' + optionString);

// Convert input to integer (assuming the user selects by index)
var selectedIndex = parseInt(input) - 1;

// Validate user input
if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < options.length) {
    selectedOption = options[selectedIndex];
    // alert(`You selected: ${selectedOption}`);
    if (boolOptions.includes(selectedIndex)) {
        NewValue = prompt("0 or 1", "0");
    }
    if (floatOptions.includes(selectedIndex)) {
        NewValue = prompt("Input a Number", "1");
    }
    if (selectedIndex == 0) {
        if (NewValue == 1) {
            Runner.prototype.gameOver = function () {}
        } else {
            Runner.prototype.gameOver = gameOverOld;
        }
    }
} else {
    alert("Invalid selection or canceled.");
}
