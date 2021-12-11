const readlineSync = require("readline-sync");

var number1 = readlineSync.question("Please enter your first number: ");
var number2 = readlineSync.question("Please enter your second number: ");
var operation = readlineSync.question("Please enter the operation to perform [add, sub, mul, div]: ");

if (operation === "add") {
    add(number1, number2);
    console.log("Result: " + add(number1, number2));
} else if (operation === "sub") {
    console.log("Result: " + subtract(number1, number2));
} else if (operation === "mul") {
    console.log("Result: " + multiply(number1, number2));
} else if (operation === "div") {
    console.log("Result: " + divide(number1, number2));
} else {
    console.log("Error");
}

function add(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

function multiply(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}
