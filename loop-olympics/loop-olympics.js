
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

}

var numbersRev = numbers
for (var j = numbersRev.length; j >= 0; j--) {
    console.log(numbersRev[j]);
}


var fruits = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var o = 2; o <= 100; o += 2) {
    console.log(o);
}

var numbersInArray = [q]
for (var q = 0; q <= 9; q++) {
    numbersInArray.push(q)
}
console.log(numbersInArray)


var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var everyOtherFruit = fruit.filter((element, index) => {
    return index % 2 === 0;
})
console.log(everyOtherFruit)

