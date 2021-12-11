import React from "react"

function Badge(props) {

    return (
        <div>
            <p> Name: {props.firstName} {props.lastName}</p>

            <p>Email: {props.email}</p>
            <p>Place of birth: {props.placeOfBirth}</p>
            <p>Phone Number: {props.phoneNumber}</p>
            <p>Favorite food: {props.favFood}</p>
            <p>{props.infoBox}</p>


        </div>
    )

}

export default Badge