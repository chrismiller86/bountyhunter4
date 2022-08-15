const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const todoList = [
    {
        name: "Medical",
        desciption: "Go to Dr",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Trash",
        desciption: "Take trash to cans",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Lawn",
        desciption: "Mow the lawn",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Dinner",
        desciption: "Cook dinnner",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Clean",
        desciption: "Clean the bathroom",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todoList)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoList.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoList.push(newTodo)
    res.send(`${res.name} was added to the todo list`)
})

todoRouter.delete("/:id", (req, res) => {
    const todoId = req.params.id
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Succesfully removed todo")
})

todoRouter.put("/:id", (req, res) => {
    const todoId = req.params.id
    const todoIndex = todoList.findIndext(todo => todo._id === todoId)
    const updatedTodo = todoList.splice(todoList[todoIndex], 1, req.body)
    res.send(updatedTodo)

})


module.exports = todoRouter