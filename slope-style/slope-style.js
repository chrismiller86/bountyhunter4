function collectAnimals(...animals) {
    console.log([...animals])
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]




function combineFruit(fruit, sweets, vegetables) {
    console.log({ fruit, sweets, vegetables })

}

combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"])






function parseSentence({ location, duration }) {
    console.log(`We're going to have a good time in ${location} for ${duration}`)
}

parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});





const returnFirst = (items) => {
    const [firstItem] = items;
    return firstItem
}
console.log(returnFirst(["thing 1", "thing 2", "thing 3", "thing 4"]))






const favoriteActivities = [
    "magnets",
    "snowboarding",
    "philanthropy",
    "janitor work",
    "eating",
];
function returnFavorites([firstFav, secondFav, thirdFav]) {

    return `My top three favorite activities are  ${firstFav}, ${secondFav} and ${thirdFav}`;
}
console.log(returnFavorites(favoriteActivities));


function combineAnimals() {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals());

// ["dog", "cat", "mouse", "jackolope", "platypus"]



function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}


function unshift(array, ...second) {
    return [...second, ...array];
}


function parseSentence({ location, duration }) {
    console.log(`We're going to have a good time in ${location} for ${duration}`)
}

parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});

function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        return {
            firstName: name[0],
            lastName: name[1]
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

