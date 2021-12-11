//1



const numArray = [2, 5, 100]
const numArrayResult = numArray.map(num => num * 2)
console.log(numArrayResult)

// 2


const numString = [2, 5, 100]
const numStringResult = numString.map(stringIt => stringIt.toString())
console.log(numStringResult)

// 3


const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNamesResult = capitalizeNames.map(capitalizeThem => capitalizeThem.charAt(0).toUpperCase() + capitalizeThem.substr(1).toLowerCase());
console.log(capitalizeNamesResult)
// 4


const namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const namesOnlyResult = namesOnly.map(user => user.name)

console.log(namesOnlyResult)


// 5
function makeStrings(arr) {
    return arr.map(function (people) {
        if (people.age > 79) {
            return people.name + " can go to the Matrix"
        } else { return people.name + " is under age!!" }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));





// 6


const readyToPutInTheDOM = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

const readyToPutInTheDOMResult = readyToPutInTheDOM.map(function (domPeople) {
    return "<h1>" + domPeople.name + "</h1>" + "<h2>" + domPeople.age + "</h2>"
})

console.log(readyToPutInTheDOMResult)
