const express = require("express")
const app = express()

app.use("/foods", (req, res, next) => {
    console.log("middleware fired")
    next()

})

module.exports = app