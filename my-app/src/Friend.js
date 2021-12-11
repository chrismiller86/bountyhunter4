import React from "react"
import Pet from "./Pet"



function Friend(props) {


    const rolladex2 = props.data.pets.map(function (individualPets) {
        return (

            <Pet pets={individualPets} />


        )
    })
    return (

        <p>
            Name: {props.data.name} - Age: {props.data.age}
            {rolladex2}
        </p>


    )

}




export default Friend