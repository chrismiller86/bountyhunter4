const form = document.addItem

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const newFoodItem = form.title.value
    form.title.value = ""

    const newLi = document.createElement("li");

    const newDiv = document.createElement("div");
    newDiv.textContent = newFoodItem;

    const newEdit = document.createElement("button");
    newEdit.textContent = "edit";
    newEdit.style.marginRight = '10px'

    const newDelete = document.createElement("button")
    newDelete.textContent = "X"
    newDelete.id = "newDelete";

    document.getElementsByTagName("ul")[0].append(newLi)
    newLi.append(newDiv)
    newLi.append(newEdit)
    newLi.append(newDelete)

    newDelete.addEventListener("click", function (j) {
        j.preventDefault()
        newLi.remove()
    })
})



