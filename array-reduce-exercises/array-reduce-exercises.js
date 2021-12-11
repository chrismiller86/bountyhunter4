// 1


const total = [1, 2, 3];
const totalResult = total.reduce(function (final, num) {
    final += num
    return final
})
console.log(totalResult)

// 2 


const stringConcat = [1, 2, 3];
const stringConcatResult = stringConcat.reduce(function (final2, num2) {
    return final2 + num2
}, "");

console.log(stringConcatResult)
// "123"   split or join

// 3


const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
const totalVotes = voters.reduce(function (final3, voter) {
    if (voter.voted) {
        final3++
    }
    return final3
}, 0)
console.log(totalVotes)

// 4 


var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = wishlist.reduce(function (final4, wish) {
    final4 += wish.price
    return final4

}, 0);

console.log(shoppingSpree)

// 5


function flatten(arr) {
    return arr.reduce(function (final, flatArr) {
        return final.concat(flatArr);
    }, [])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6 

const voters1 = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr1) {
    return arr1.reduce(function (final, voter1) {
        if (voter1.age <= 25) {
            if (voter1.voted) {
                final.numYoungVotes++
            }
            final.numYoungPeople++
        } else if (voter1.age >= 36) {
            if (voter1.voted) {
                final.numOldVotesPeople++
            }
            final.numOldsPeople++
        } else {
            if (voter1.voted) {
                final.numMidVotesPeople++
            }
            final.numMidsPeople++
        }
        return final
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })
}

console.log(voterResults(voters1));
