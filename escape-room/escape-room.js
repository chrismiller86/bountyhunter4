const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");
console.log("Hello, " + name);


if (readlineSync.keyInYN("Would you like to play Escape Room ?")) {
    console.log("Lets go!")
} else {

    process.exit();
}
let gameOver = false
let haveKey = false

decisions = ["Put your hand in the hole?", "Find the key?", "Open the door?",]
while (gameOver === false) {
    index = readlineSync.keyInSelect(decisions, "Decisions....Decisions, what would you like to do? ");
    if (1 == index) {
        console.log("You found the key");
        haveKey = true;

    } else if (2 == index) {
        if (havekey === false) {
            console.log("You must first find the key");
        } else if (haveKey === true) {
            console.log("You have the key, unlock the door and escape!");
            gameOver = true
        }
    } else {
        console.log("You died!")
        gameOver = true
    }
}



/*const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");
console.log("Hello, " + name);


if (readlineSync.keyInYN("Would you like to play Escape Room ?")) {
    console.log("Lets go!")
} else {

    process.exit();
}
let gameOver = false
let haveKey = false

decisions = ["Put your hand in the hole?", "Find the key?", "Open the door?",]
while (gameOver === false) {
    index = readlineSync.keyInSelect(decisions, "Decisions....Decisions, what would you like to do? ");
    if (0 == index) {
        handInHole()
    } else if (1 == index) {
        keyFound()
    } else if (2 == index) {
        openTheDoor()
    } else {
        console.log("Maybe next time!")
    }

}
function handInHole() {
    console.log("You died!")
    gameOver = true
}

function keyFound() {
    console.log("You found the key, you can open the door now!")
    haveKey = true;
}

function openTheDoor() {
    if (haveKey === false) {
        console.log("You have to find the key");
    } else {
        console.log("Unlock the door and escape")
    }
}
*/







