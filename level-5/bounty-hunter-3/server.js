const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.use(morgan("dev"))

app.use("/bounty", require("./routes/bountyData.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen("8000", () => {
    console.log("The server is running on Port 8000")
})

module.exports = app    
