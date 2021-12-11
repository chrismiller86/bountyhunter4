// 1 

const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//2

const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = arr =>
    arr.map carrot => ({ type: "carrot", name: carrot });




//3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = arr => arr.filter(person => person.friendly);

// 4 

let doMathSum = (a, b) => a + b;

let produceProduct = (a, b) => a * b;


// 5 

function pringString(firstName, LastName, Age) {
    return "hi" + firstName
}

Hi Kat Stark, how does it feel to be 40 ?
