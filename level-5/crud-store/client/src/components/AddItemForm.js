import React, { useState } from "react";

function AddItemForm(props) {
    const initInputs = { name: props.name || "", price: props.price || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="name"
            />
            <input
                type="text"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                placeholder="price"
            />
            <button>{props.btnText}</button>
        </form >
    )
}

export default AddItemForm