const express = require("express")
const app = express()

app.use(express())

app.use("/todo", require("./routes/todo.js"))

app.listen("8000", () => {
    console.log("The server is running on Port 8000")
})

module.exports = app 