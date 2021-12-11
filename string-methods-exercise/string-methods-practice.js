function upDownAndTogether() {
    let hello = "hello"
    let upperHello = hello.toUpperCase()
    let doubleHello = upperHello.concat(hello)
    console.log(hello)
    console.log(upperHello)
    console.log(doubleHello)
}
upDownAndTogether()

function halfLength() {
    let helloWorld = "Hello World"
    let halfWorld = Math.floor(helloWorld.length / 2)
    console.log(halfWorld)
}
halfLength()

function goodbyeHalf() {
    let hello = "hello"
    let returnFirstHalf = hello.slice(0, 2)
    console.log(returnFirstHalf)
}
goodbyeHalf()

let helloWorld2 = "Hello World"
function halfUpAndHalfDown(helloWorld2) {
    let halfUp = helloWorld2.length / 2
    let heWoSliced = helloWorld2.slice(0, halfUp)
    let upperHalf = heWoSliced.toUpperCase()

    let halfDown = helloWorld2.length / 2
    let secondSlice = helloWorld2.slice(halfDown)
    let lowerHalf = secondSlice.toLowerCase()


    let upAndDownTogether = upperHalf.concat(lowerHalf)
    console.log(upAndDownTogether)

}
halfUpAndHalfDown(helloWorld2)





