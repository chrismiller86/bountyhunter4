
const form = document.getElementsByName("travelerInformation")

document.travelerInformation.addEventListener("submit", function (e) {
    e.preventDefault()
    let firstN = travelerInformation.firstName.value;
    let lastN = travelerInformation.lastName.value;
    let age = travelerInformation.age.value;
    let genderSelection = travelerInformation.gender.value;
    let destination = travelerInformation.location.value;

    let foodRestricitons = [];
    let checkedBoxes = document.querySelectorAll("input[name=dietaryRestrictions]:checked");
    for (let i = 0; i < checkedBoxes.length; i++) {
        foodRestricitons.push(checkedBoxes[i].value);
    }
    firstN.value = "";
    lastN.value = "";
    age.value = "";
    genderSelection.value = "";

    alert("First Name: " + firstN + "\nLast Name: " + lastN + "\nAge: " + age + "\nGender: " + genderSelection + "\nDestionation: " + destination + "\nDietary Restrictions: " + foodRestricitons)




})
