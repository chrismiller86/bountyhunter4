// Get
const todoForm = document["todo-form"]


function getData() {
    axios.get("https://api.vschool.io/chrismiller/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}


function listData(data) {

    clearList()

    // function deleteButton() {
    //     axios.delete("https://api.vschool.io/chrismiller/todo/" + res.data[i]._id)
    //         .then(response => {
    //             el.removeChild(el.firstChild)
    //         }
    //         )

    // }

    for (let i = 0; i < data.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        document.getElementById("todo-list").appendChild(h1)

        const h2 = document.createElement("h2")
        h2.textContent = data[i].price
        document.getElementById("todo-list").appendChild(h2)

        const h3 = document.createElement("h3")
        h3.textContent = data[i].description
        document.getElementById("todo-list").appendChild(h3)

        const image = document.createElement("img")
        image.src = data[i].imgUrl
        image.style.height = "300px"
        image.style.width = "300px"
        document.getElementById("todo-list").appendChild(image)

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.name = "checkbox"
        checkbox.id = "checkbox"
        checkbox.checked = data[i].completed
        document.getElementById("todo-list").appendChild(checkbox)
        checkbox.addEventListener("click", f => {
            if (checkbox.checked === true) {
                axios.put(`https://api.vschool.io/chrismiller/todo/${data[i]._id}`, { completed: true })
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            } else {
                axios.put(`https://api.vschool.io/chrismiller/todo/${data[i]._id}`, { completed: false })
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            }
            if (checkbox.checked === true) {
                h1.style.textDecoration = "line-through"
            } else {
                h1.style.textDecoration = "none"
            }

        })

        if (checkbox.checked === true) {
            h1.style.textDecoration = "line-through"
        } else {
            h1.style.textDecoration = "none"
        }


        // function lineThrough() {
        //     if (checkbox.checked) {
        //         h1.style.textDecoration = "line-through"
        //     } else {
        //         h1.style.textDecoration = "none"
        //     }
        // }

        const checkboxLabel = document.createElement("label")
        checkboxLabel.for = "checkbox"
        checkboxLabel.textContent = "Completed"
        document.getElementById("todo-list").appendChild(checkboxLabel)




        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("name", "deleteButton")
        document.getElementById("todo-list").appendChild(deleteButton)
        deleteButton.addEventListener("click", function () {
            axios.delete(`https://api.vschool.io/chrismiller/todo/${data[i]._id}`)
                .then(response => getData())
                .catch(error => console.log(error))
        })




    }
}

function clearList() {
    const el = document.getElementById("todo-list")
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()


todoForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgtext.value


    }

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value =
        todoForm.imgtext.value = ""


    axios.post("https://api.vschool.io/chrismiller/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})



