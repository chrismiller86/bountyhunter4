const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    { firstName: "Darth", lastName: "Vader", isLiving: true, bountyAmount: 100, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "Sidius", isLiving: true, bountyAmount: 150, type: "Sith", _id: uuidv4() },
    { firstName: "Yoda", lastName: "?", isLiving: true, bountyAmount: 200, type: "Jedi", _id: uuidv4() },
    { firstName: "Luke", lastName: "SkyWalker", isLiving: true, bountyAmount: 300, type: "Jedi", _id: uuidv4() }

]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Succesfully add ${newBounty} to the bounty list`)
})



module.exports = bountyRouter