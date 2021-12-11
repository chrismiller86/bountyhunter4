
const pestForm = document.pestWorkSheet

pestForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let goomba = document.getElementsByName("goomba").value
    let bobOmbs = document.getElementsByName("bobombs").value
    let cheepCheep = document.getElementsByName("cheepcheep").value
    let goombaPrice = goomba * 5;
    let bobOmbsPrice = bobOmbs * 7;
    let cheepCheepPrice = cheepCheep * 11;
    const totalPrice = goombaPrice + bobOmbsPrice + cheepCheepPrice
    let totalWindow = document.getElementById("totalTogether")
    totalWindow.textContent = "Total: " + totalPrice
})
