// 1

function sum(x, y) {
    try {

        if (isNaN(x) || isNaN(y)) throw "Must be a number";


    }
    catch (err) {
        console.log(err)
    }

    return x + y;

}
sum(1, 2)



// 2



var user = { username: "sam", password: "123abc" };
function login(username, password) {
    try {
        if (username !== "sam" || password !== "123abc") throw "incorrect credentials"
    }
    catch (err) {
        console.log(err)
    }

}

login("sam", "123abc")
