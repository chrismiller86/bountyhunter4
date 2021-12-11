// 1


const leastToGreatest = [1, 3, 5, 2, 90, 20];

leastToGreatest.sort(function (a, b) {
    return a - b
})
console.log(leastToGreatest)

// 2 


const greatestToLeast = [1, 3, 5, 2, 90, 20];
greatestToLeast.sort(function (c, d) {
    return d - c
})
console.log(greatestToLeast)

// 3 


const lengthSort = ["dog", "wolf", "by", "family", "eaten"];
lengthSort.sort(function (e, f) {
    return e.length - f.length

})
console.log(lengthSort)

// 4 


const alphabetical = ["dog", "wolf", "by", "family", "eaten"];
alphabetical.sort()
console.log(alphabetical)

// 5 



const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

byAge.sort(function (g, h) {
    return g.age - h.age
})
console.log(byAge)
