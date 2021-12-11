//const status = ["Small", "Big", "Powered Up", "Dead"];

class Player {
    constructor(name, totalCoins = 0, status = "Small", hasStar = false, gameActive = true) {
        this.name = name,
            this.totalCoins = totalCoins,
            this.status = status,
            this.hasStar = hasStar,
            this.gameActive = gameActive

    }

    setName() {
        if (10 * Math.random() < 5) {
            this.name = "Luigi";
        } else {
            this.name = "Mario";
        }
    }

    gotHit() {
        if (this.status === "Small") {
            this.status = "Dead"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Dead") {
            this.gameActive = false
        }
    }
    gotPoweredUp() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print(name, totalCoins, status, star) {
        console.log(`Name: ${name}, Coins: ${totalCoins}, Status: ${status}, Star: ${star} `);
    }
}




function playing() {
    const player = new Player()
    const options = ["Mario", "Luigi"];
    let randomNum = Math.floor(Math.random() * 2)
    player.setName(options[randomNum]);
    var intervalID = setInterval(function () {
        const randomNumAgain = Math.floor(Math.random() * 3)
        if (randomNumAgain === 0) {
            player.gotHit()
        } else if (randomNumAgain === 1) {
            player.gotPoweredUp()
        } else if (randomNumAgain === 2) {
            player.addCoin()
        } else {
            console.log("There has been a problem")
        }
        if (player.status === "Dead") {
            clearInterval(intervalID)
            console.log("You have died, Game Over")
        }
        player.print(
            player.name,
            player.totalCoins,
            player.status,
            player.hasStar
        );
    }, 1000);


}

playing()

