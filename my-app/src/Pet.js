import React from "react"

function Pet(props) {
    return (
        <p>
            Pet Name: {props.pets.name} - is a {props.pets.breed}
        </p>


    )
}

export default Pet