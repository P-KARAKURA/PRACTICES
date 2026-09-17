// ==========================================
// JAVASCRIPT CALCULATOR
// ==========================================


// ------------------------------------------
// 1. GET THE HTML ELEMENTS
// ------------------------------------------

const currentDisplay = document.getElementById("current");

const previousDisplay = document.getElementById("previous");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.getElementById("equals");

const clearButton = document.getElementById("clear");


// ------------------------------------------
// 2. VARIABLES
// ------------------------------------------

let currentNumber = "";

let previousNumber = "";

let operator = "";


// ------------------------------------------
// 3. NUMBER BUTTONS
// ------------------------------------------

numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let number = button.textContent;

        currentNumber = currentNumber + number;

        currentDisplay.textContent = currentNumber;

    });

});


// ------------------------------------------
// 4. OPERATOR BUTTONS
// ------------------------------------------

operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        previousNumber = currentNumber;

        operator = button.dataset.operator;

        currentNumber = "";

        previousDisplay.textContent =
            previousNumber + " " + button.textContent;

    });

});


// ------------------------------------------
// 5. EQUALS BUTTON
// ------------------------------------------

equalsButton.addEventListener("click", function() {

    let number1 = Number(previousNumber);

    let number2 = Number(currentNumber);

    let result;


    if (operator === "+") {

        result = number1 + number2;

    }

    else if (operator === "-") {

        result = number1 - number2;

    }

    else if (operator === "*") {

        result = number1 * number2;

    }

    else if (operator === "/") {

        result = number1 / number2;

    }


    currentNumber = result;

    currentDisplay.textContent = result;

    previousDisplay.textContent =
        number1 + " " + operator + " " + number2;

});


// ------------------------------------------
// 6. CLEAR BUTTON
// ------------------------------------------

clearButton.addEventListener("click", function() {

    currentNumber = "";

    previousNumber = "";

    operator = "";

    currentDisplay.textContent = "0";

    previousDisplay.textContent = "";

});