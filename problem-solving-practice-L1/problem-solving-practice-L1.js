/*
const numbersArray = ([3, 5, 2, 8, 1])
function returnHighestNumber(largest) {
    let highest = largest[0];
    for (let k = 0; k < largest.length; k++) {
        if (largest[k] > highest) {
            highest = largest[k]
        }
    }
    return highest;
}
console.log(returnHighestNumber(numbersArray))
*/


const numbersArray = ([3, 5, 2, 8, 1])
let largestNumSoFar = [0]
for (let k = 0; k < numbersArray.length; k++) {
    if (numbersArray[k] > largestNumSoFar) {
        largestNumSoFar = numbersArray[k];

    }
}
console.log(largestNumSoFar)





const lettersWithStrings = (["#3", "$$$", "C%4!", "Hey!"], "!")
const exclamationPoint = "!"
newVar = []
function wordsWithExclamationPoint(lettersWithStrings, exclamationPoint) {


    for (let i = 0; i < lettersWithStrings.length; i++) {
        if (lettersWithStrings[i].includes(exclamationPoint)) {
            newVar.push(lettersWithStrings[i])
        }
    }
    return newVar;
}
console.log(wordsWithExclamationPoint(lettersWithStrings, exclamationPoint))



let num1 = 9
let num2 = 3
function isDivisible(num1, num2) {

    return num1 % num2 === 0

}

console.log(isDivisible(9, 3))


