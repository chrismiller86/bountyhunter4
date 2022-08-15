import React, { useState } from "react";
import AddItemForm from "./AddItemForm.js";

function Inventory(props) {
    const { name, price, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            {!editToggle ?
                <>
                    <h1>{name}</h1>
                    <p>Price: ${price}</p>
                    <button onClick={() => props.deleteItem(_id)} >Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} >Edit</button>
                </>
                :
                <>
                    <AddItemForm
                        name={name}
                        price={price}
                        _id={_id}
                        btnText="submit edit"
                        submit={props.editItem}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} >Close</button>
                </>
            }
        </div>
    )
}

export default Inventory