const readlineSync = require("readline-sync");


const greeting = ("I hope you are prepared for an adeventure! ");
console.log(greeting);

const name = readlineSync.question("What is your name? ");
console.log("Hello, " + name + " let us begin. ");




const player1 = {
    name: name,
    life: 100,
    inventory: []

}

let gameOver = false
while (gameOver === false) {
    walkOn = readlineSync.keyIn("Shall we [w]alk the path through the forest check the [i]nventory, see your player [p]rofile, or [q]uit? ", { limit: "wiqp" })
    if (walkOn === 'w') {
        walking();
    } else if (walkOn === "q") {
        quit();
    } else if (walkOn === "i") {
        console.log(player1.inventory)
    } else if (walkOn === "p") {
        console.log(player1)
    }
}



function walking() {
    const odds = Math.floor(Math.random() * 4)
    if (odds === 0) {
        fight = true;
        battle();

    } else {
        console.log("No enemies yet, lets see how long that lasts!")
        return;
    }
}

function quit() {
    console.log("You do not have what it takes to continue on this adventure!")
    gameOver = true;

}

function battle() {
    let fight = true
    const enemies = enemySelection()

    function enemySelection() {
        const whichEnemy = Math.floor(Math.random() * 3)
        if (whichEnemy === 0) {
            return new Enemy("Troll", 50, "Club")
        } else if (whichEnemy === 1) {
            return new Enemy("Demon", 65, "Evil talisman")
        } else {
            return new Enemy("Dragon", 80, "Dragon scale armor")
        }
    }

    function Enemy(name, health, item) {
        this.name = name
        this.health = health
        this.item = item
    }


    console.log("You have crossed paths with a " + enemies.name + " what will you do next? ")
    while (fight) {
        const fightOrRun = readlineSync.keyIn("You can attempt to [r]un like a coward, or you can [f]ight like the hero you are! ", { limit: "rf" });
        if (fightOrRun === "f") {
            let enemyDamage = Math.floor(Math.random() * 8)
            enemies.health = enemies.health - enemyDamage
            console.log("the " + enemies.name + " took " + enemyDamage + " damage and now has " + enemies.health + " health")



            let heroDamage = Math.floor(Math.random() * 5)
            player1.life = player1.life - heroDamage
            console.log("you took " + heroDamage + " damage from the " + enemies.name + " you now have " + player1.life + " health")

            if (enemies.health - enemyDamage <= 0) {
                console.log(name + " you have vanquished the " + enemies.name + " take your prize and add it to your inventory")
                player1.inventory.push(enemies.item)
                fight = false
                return;

            }

            if (player1.health - heroDamage <= 0) {
                console.log("You were no match for the " + enemies.name + " better luck next time.")
                gameOver = true;
                return;

            }
        } else if (fightOrRun === "r") {
            console.log("You attempt to run, like a coward")
            let chanceOfEscape = Math.floor(Math.random() * 2)
            if (chanceOfEscape === 0) {
                console.log("and you manage to escape for now")
                fight = false
                return;
            } else if (chanceOfEscape === 1) {
                console.log("but the " + enemies.name + "," + " was too fast. Prepare for battle!")
                fight = true
            }
        }

    }
}