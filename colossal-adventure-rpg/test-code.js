/*

const readlineSync = require("readline-sync");

// Introductions are in order
const greeting = ("I hope you are prepared for an adeventure! ");
console.log(greeting);

const name = readlineSync.question("What is your name? ");
console.log("Hello, " + name + " let us begin. ");


// Create player
// while (gameOver = false) {

const player1 = {
    name: " ",
    life: 100,
    items: []

}

let gameOver = false
// To walk or not to walk, that is the question
while (gameOver = false) {

    const userSelection = readlineSync.keyIn("Shall we [w]alk the path through the forest or [q]uit? ", { limit: "wq" })

    if (userSelection === "w") {
        walk();
    }
    else if (userSelection === "q") {
        quit();

    }
}



function walk() {
    let odds = Math.floor(Math.random() * 4)
    if (odds === 4) {
        battle();
    } else {
        return "No enemy encounters yet!";
    }
}


function quit() {
    console.log("You should be ashamed!")
    gameOver = true;
    return;
}



// run or fight

function toRunOrToFight() {

    const troll = {
        name: "Troll",
        life: 80,
        gear: "Club",
        vanquished: false
    }

    const demon = {
        name: "Demon",
        life: 65,
        gear: "Evil talisman",
        vanquished: false

    }
    const dragon = {
        name: "Dragon",
        life: 90,
        gear: "Dragon scale armor",
        vanquished: false

    }


    let enemies = [troll, demon, dragon]
    let selectedEnemy = enemies[Math.floor(Math.random() * enemies.length)];

    runOrFight = readlineSync.keyIn("You have encountered a " + selectedEnemy.name + " do you want to [r]un or [f]ight? ", { limit: "rf" })



    if (runOrFight === "r") {
        run();
    } else {
        console.log("fight");
        //battle();
    }
}
toRunOrToFight()



function run() {
    const chanceOfEscape = Math.random() < 0.5;
    if (chanceOfEscape >= .5) {
        return "You have escaped for now";
    } else {
        console.log("battle")
        // battle();
    }

}
let runOn = run();
console.log(runOn)
//}



function battle() {
    const fight = true;
    let enemyDamageDelt = Math.floor(Math.random() * 8)
    let heroDamageDelt = Math.floor(Math.random() * 5)
    while (fight = true) {
        if (player1.life > 0) {
            player1.life = player1.life - enemyDamageDelt
        } if (selectedEnemy.life > 0) {
            selectedEnemy.life - heroDamageDelt
        }
    }
}
battle()



function attack() {
    const attackPoint = Math.random()
}

function enemyAttack() {
    const enemyAttackPoint = Math.random()
}

function death() {
    if (player1.life <= 0) {
        player.alive = false
        console.log("You were bested by the" + selectedEnemy)
        process.end
    }
}

function enemyVanquishd() {
    if (enemies.life <= 0) {
        console.log("You have vanquished the " + selectedEnemy)
        selectedEnemy.gear.push(player1.items)
    }
}


while enemies.vanquished = false continue the gameOver

*/
function battle() {
    const enemies = enemySelection();
    let fight = true;
    console.log("You have crossed paths with a " + enemies.name + " what will you do next? ")
    while (fight) {

    }

}

console.log("You have crossed paths with a " + enemies.name + " what will you do next? ")
while (fight) {
    const fightOrRun = readlineSync.keyIn("You can attempt to [r]un like a coward, or you can [f]ight like the hero you are! ", { limit: "rf" });
    if (fightOrRun === "f") {
        let enemyDamage = Math.floor(Math.random() * 10)
        let heroDamage = Math.floor(Math.random() * 15)
        if (enemies.health - enemyDamage <= 0) {
            enemies.health = enemies.health - enemyDamage
            console.log("the" + enemies.name + " took" + enemyDamage + " and now has" + enemies.life + " health")
            console.log(name + " you have vanquished the " + enemies.name + " take your prize and add it to your inventory")
            player1.inventory.push(enemies.item)
                (!fight)
            return;

        }
        let heroDamage = Math.floor(Math.random() * 15)

        if (player1.life - heroDamage <= 0) {
            player1.life = player1.life - heroDamage
            console.log("you took " + heroDamage + " damage from the enemy and now have " + player1.life + " health")
            gameOver = true;
            return;

        }


