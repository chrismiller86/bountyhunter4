let header = document.getElementById("header");
header.textContent = "JavaScript Made This!!"
header.style.fontSize = "75px"
header.style.textAlign = "center"
header.style.display = "block"

let lineBreak = document.createElement("BR")
header.append(lineBreak)

let span1 = document.createElement("span")
header.append(span1)
span1.textContent = "Chris "
span1.style.color = "red"
span1.style.fontSize = "40px"

let span2 = document.createElement("span")
header.append(span2)
span2.textContent = "wrote this JavaScript"
span2.style.fontSize = "40px"
span2.style.display = "inline"

let messages = document.getElementsByClassName("message");
messages[0].textContent = "Hi";
messages[1].textContent = "Hello";
messages[2].textContent = "How are you?";
messages[3].textContent = "Swell";

let beGone = document.getElementById("clear-button")
beGone.onclick = function () {
    messages[0].textContent = "     ";
    messages[1].textContent = "     ";
    messages[2].textContent = "     ";
    messages[3].textContent = "     ";
};


const dropDown = document.querySelector("select");
dropDown.addEventListener("change", func1);

function func1() {
    let themeOne = document.querySelector("theme-one")
    if ("themeOne") {
        messages[0].style.backgroundColor = "burlywood";
        messages[1].style.backgroundColor = "lightblue";
        messages[2].style.backgroundColor = "burlywood";
        messages[3].style.backgroundColor = "lightblue";

    } else {
        messages[0].style.backgroundColor = "red";
        messages[1].style.backgroundColor = "black";
        messages[1].style.Color = "white";
        messages[2].style.backgroundColor = "red";
        messages[3].style.backgroundColor = "black";
        messages[3].style.Color = "white";

    }
};

