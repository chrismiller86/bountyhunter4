var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const ofAge = peopleArray.reduce(function (final, individuals) {
    if (individuals.age > 18) {
        final.sort((a, b) => {
            b.lastName - a.lastName
        })
        final.push("<li>" + individuals.firstName + " " + individuals.lastName + " is " + individuals.age + " </li>")
    }

    return final
}, [])
console.log(ofAge.sort((a, b) => {
    b.lastName - a.lastName
}))


/*
    .sort(function (final, individuals) {
        if (individuals.lastName > final.lastName) {
            return -1;
        } if (final.lastName > individuals.lastName) {
            return 1;
        }
        return 0;
    })


function sortedOfAge(arr) {
    let people = arr
        .filter((person) => {
            if (person.age > 18) {
                return person;
            }
        })
        .sort((a, b) => {
            b.lastName - a.lastName
        })
        .map(name => "<li>" + name.firstName + " " + name.lastName + " " + name.age + "</li>")
    return people;
}
console.log(sortedOfAge(peopleArray));

*/