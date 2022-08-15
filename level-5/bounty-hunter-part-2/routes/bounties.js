const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    {
        firstname: "Anikan",
        lastname: "Skywalker",
        isLiving: true,
        bounty: 100,
        type: "Sith",
        id: uuidv4()
    },
    {
        firstname: "Yoda",
        lastname: "?",
        isLiving: true,
        bounty: 200,
        type: "Jedi",
        id: uuidv4()
    },
    {
        firstname: "Darth",
        lastname: "Sidious",
        isLiving: true,
        bounty: 300,
        type: "Sith",
        id: uuidv4()
    },
    {
        firstname: "Obi-wan",
        lastname: "Kenobi",
        isLiving: false,
        bounty: 50,
        type: "Jedi",
        id: uuidv4()
    }
]


bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty.id = uuidv4()
    bounties.push(newBounty)
    res.send(`Succesfully added ${newBounty.firstname} to the hit list!`)
})

bountyRouter.delete("/:id", (req, res) => {
    const bountyId = req.params.id
    const bountyIndex = bounties.findIndex(bounty => bounties.id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Succesfully removed bounty")

})

bountyRouter.put("/:id", (req, res) => {
    const bountyId = req.params.id
    const bountyIndex = bounties.find(bounty => bounties.id === bountyId)
    // const updatedBounty = object.assign(bounties[bountyIndex], req.body)
    const updatedBounty = bounties.splice(bounties[bountyIndex], 1, req.body)
    res.send(updatedBounty)

})

module.exports = bountyRouter