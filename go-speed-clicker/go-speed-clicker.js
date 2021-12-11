const button = document.getElementById("button");
let buttonClicked = 0;
const counter = document.getElementById("counter")

button.addEventListener("click", function () {
    counter.innerText = buttonClicked += 1;
    localStorage.count = buttonClicked;
})



/*
let timer = document.getElementById("timer");

setTimeout(function () {

}, 30000)

*/