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

var invisibleElement = document.getElementById('invisibleElement');

// If the element doesn't exist, create and add it
if (!invisibleElement) {
    gameOverOld = Runner.prototype.gameOver;
    // Create a new element
    invisibleElement = document.createElement('div');

    // Set the element's ID
    invisibleElement.id = 'OD_gameOver';

    // Set the element's content (optional)
    invisibleElement.textContent = gameOverOld;

    // Apply CSS styles to make the element invisible
    invisibleElement.style.display = 'none'; // or invisibleElement.style.visibility = 'hidden';

    // Add the element to the document body (or any other parent element)
    document.body.appendChild(invisibleElement);
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
            Runner.prototype.gameOver = invisibleElement.textContent;
        }
    }
} else {
    alert("Invalid selection or canceled.");
}
