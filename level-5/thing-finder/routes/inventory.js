const express = require("express")
const app = require("../server")
const inventoryItemsRouter = express.Router()


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
    }, {
        name: "soup",
        type: "food",
        price: 300,
    }, {
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryItemsRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})


inventoryItemsRouter.get("/:item", (req, res) => {
    const itemType = req.params.item
    const foundItem = inventoryItems.find(item => itemType === item)
    res.send(foundItem)
})

inventoryItemsRouter.post("/", (req, res) => {
    const newItem = req.body
    inventoryItems.push(newItem)
    res.send(`Succesfully added ${newItem.name} to the fruits list`)
})

inventoryItemsRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredName = inventoryItems.filter(item => item.name === name)
    res.send(filteredName)
})

module.exports = inventoryItemsRouter