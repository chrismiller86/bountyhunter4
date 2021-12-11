const form = document["calculator"]

form.addEventListener("submit", function (e) {
    e.preventDefault()


    const firstAddNum = parseInt(form.add1.value)
    const secondAddNum = parseInt(form.add2.value)
    const addedTogether = firstAddNum + secondAddNum
    const outputAdd = document.createElement("h2")
    outputAdd.textContent = addedTogether

    document.getElementsByTagName("body")[0].append(outputAdd)
    form.add1.value = ""
    form.add2.value = ""
    //})




    //SUBTRACT
    //form.addEventListener("submit", function (f) {
    // f.preventDefault()
    const firstSubNum = parseInt(form.sub1.value)
    const secondSubNum = parseInt(form.sub2.value)

    const subtracted = firstSubNum - secondSubNum
    const outputSub = document.createElement("h2")
    outputSub.textContent = subtracted

    document.getElementsByTagName("body")[0].append(outputSub)
    form.sub1.value = ""
    form.sub2.value = ""
    //})

    //MULTIPLY
    //form.addEventListener("submit", function (g) {
    //  g.preventDefault()
    const firstMultNum = parseInt(form.mult1.value)
    const secondMultNum = parseInt(form.mult2.value)

    const multiplied = firstMultNum * secondMultNum
    const outputMult = document.createElement("h2")
    outputMult.textContent = multiplied

    document.getElementsByTagName("body")[0].append(outputMult)
    form.mult1.value = ""
    form.mult2.value = ""


})

/*
const completeAnswer = []
for (let i = 0; i < form.button.lenght; i++) {
    if (form.button[i] == "add") {
        completeAnswer.push(form.button[i].value)
    } else if (form.buton[i] == "sub") {
        completeAnswer.push(form.button[i].value)

    } else if (form.button[i] == "mult") {
        completeAnswer.push(form.button[i].value)

    }
}
*/