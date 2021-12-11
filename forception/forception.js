

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var splitIt = alphabet.split("")



function forcep(people, splitIt) {
    var allTogether = []
    for (var i = 0; i < people.length; i++) {
        allTogether.push(people[i] + ":")
        for (var h = 0; h < splitIt.length; h++) {
            allTogether.push(splitIt[h])
        }
    }
    console.log(allTogether)
}

forcep(people, splitIt)
/*

*/

