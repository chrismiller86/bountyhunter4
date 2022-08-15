import React, { useState, useEffect } from "react";
import axios from "axios"
import Inventory from "./components/Inventory.js";
import AddItemForm from "./components/AddItemForm.js";



function App() {
    const [inventory, setInventory] = useState([])



    function getItems() {
        axios.get("/items")
            .then(res => setInventory(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getItems()
    })

    function addItem(newItem) {
        axios.post("/items", newItem)
            .then(res => {
                setInventory(prevInventory => [...prevInventory, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteItem(itemId) {
        axios.delete(`./items/${itemId}`)
            .then(res => {
                setInventory(prevItems => prevItems.filter(item => item._id !== itemId))
            })
            .catch(err => console.log(err))
    }

    function editItem(updates, itemId) {
        axios.put(`./items/${itemId}`, updates)
            .then(res => {
                setInventory(prevItems => prevItems.map(item => item._id !== itemId ? item : res.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AddItemForm
                submit={addItem}
                btnText="Add Item"
            />
            {
                inventory.map(item =>
                    <Inventory
                        {...item}
                        key={item.name}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />)}
        </div>
    )
}

export default App