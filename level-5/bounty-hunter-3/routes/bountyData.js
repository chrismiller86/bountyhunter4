const express = require("express")
const bountyDataRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounty = [
    {
        firstName: "Luke",
        lastName: "SkyWalker",
        isLiving: true,
        bounty: 100,
        type: "Jedi",
        _id: uuidv4()

    },
    {
        firstName: "Darth",
        lastName: "Maul",
        isLiving: true,
        bounty: 100,
        type: "Sith",
        _id: uuidv4()

    },
    {
        firstName: "Darth",
        lastName: "Sideous",
        isLiving: true,
        bounty: 100,
        type: "Sith",
        _id: uuidv4()

    },
    {
        firstName: "Yoda",
        lastName: "?",
        isLiving: true,
        bounty: 100,
        type: "Jedi",
        _id: uuidv4()

    },
    {
        firstName: "Obi-wan",
        lastName: "Kenobi",
        isLiving: true,
        bounty: 100,
        type: "Jedi",
        _id: uuidv4()

    },
    {
        firstName: "Darth",
        lastName: "Vader",
        isLiving: true,
        bounty: 100,
        type: "Sith",
        _id: uuidv4()

    }
]

// Get
bountyDataRouter.get("/", (req, res) => {
    res.send(bounty)
})

//Get 1
bountyDataRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    if (!foundBounty) {
        const error = new Error("The item was not found")
        return next(error)
    }
    res.send(foundBounty)
})

//Post
bountyDataRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send(newBounty)
})


//Put 
bountyDataRouter.put("/:id", (req, res) => {
    const bountyId = req.params.id
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = bounty.splice(bounty(bountyIndex, 1, req.body))
    // const updatedBounty = Object.assign(bounty[bountyIndex], req.body)
    res.send(updatedBounty)
})

//Delete
bountyDataRouter.delete("/:id", (req, res) => {
    const bountyId = req.params._id
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, -1)
    res.send("Successfully removed bounty")
})




module.exports = bountyDataRouter