const express = require("express")
const app = express()

app.use(express.json())

app.use("/foods", (req, res, next) => {
    console.log("Hello")
    next()


})

app.use("/foods", require("./routes/foods.js"))



app.listen("8000", () => {
    console.log("The server is running on Port 8000")
})

module.exports = app