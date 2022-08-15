const express = require("express")
const app = express()
const foodsRouter = express.Router()

const foodList = [
    {

        type: "banana",
        color: "Yellow"
    },
    {
        type: "Apple",
        color: "Red"
    },
    {
        type: "Pineapple",
        color: "Yellow"
    }
]

app.use("/foods", (req, res, next) => {
    console.log("Hello")


})

foodsRouter.get("/", (req, res) => {
    res.send(foodList)
})

module.exports = foodsRouter