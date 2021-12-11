// 1
/*
function fiveAndGreaterOnly(over5) {
    fiveAndGreaterOnly.filter(function (over5) {
        if (over5 > 5) {
            return []
        }
    })
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
*/
const greaterThanFive = [3, 6, 8, 2]

const over5 = greaterThanFive.filter(function (num) {
    if (num > 5) {
        return num
    }
})
console.log(over5)

// 2 


const evensOnly = [3, 6, 8, 2]

const evensOnlyResult = evensOnly.filter(function (evenNum) {
    if (evenNum % 2 === 0) {
        return evenNum
    }
})

console.log(evensOnlyResult)

// 3 


const fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"];

const fiveCharactersOrFewerOnlyResult = fiveCharactersOrFewerOnly.filter(word => word.length <= 5)

console.log(fiveCharactersOrFewerOnlyResult)

// 4


const peopleWhoBelongToTheIlluminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
const peopleWhoBelongToTheIlluminatiResult = peopleWhoBelongToTheIlluminati.filter(function (illuminatiPeople) {
    if (illuminatiPeople.member === true) {
        return illuminatiPeople
    }
})
console.log(peopleWhoBelongToTheIlluminatiResult)

// 5 



const ofAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const ofAgeResult = ofAge.filter(people => people.age > 18)

console.log(ofAgeResult)
