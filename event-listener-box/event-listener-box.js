var box = document.getElementById("box")
var body = document.getElementById("body")


function func1() {
    box.setAttribute("style", "background-color:blue;")
}

function func2() {
    box.setAttribute("style", "background-color:White;")
}

function func3() {
    box.setAttribute("style", "background-color:green;")
}

function func4() {
    box.setAttribute("style", "background-color:red;")
}
function func5() {
    box.setAttribute("style", "background-color:yellow;")
}

function func6() {
    document.body.style.backgroundColor = "orange";
}

box.addEventListener("mouseover", func1);
box.addEventListener("mouseout", func2);
box.addEventListener("dblclick", func3);
box.addEventListener("mousedown", func4);
box.addEventListener("mouseup", func5);
window.addEventListener("wheel", func6);
window.addEventListener("keydown", function (event) {
    if (event.key === "r") {
        box.style.backgroundColor = "red";
    } else if (event.key === "b") {
        box.style.backgroundColor = "blue";
    } else if (event.key === "g") {
        box.style.backgroundColor = "green";
    } else if (event.key === "y") {
        box.style.backgroundColor = "yellow";
    } else if (event.key === "o") {
        box.style.backgroundColor = "orange";
    } else if (event.key === "w") {
        box.style.backgroundColor = "white";
    }


})





