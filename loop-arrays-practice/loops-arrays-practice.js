var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] == "computer") {
        count++;
    }
}

console.log(count);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[j].age > 18) {

        console.log("old enough")
    } else {
        console.log("not old enough")
    }
}