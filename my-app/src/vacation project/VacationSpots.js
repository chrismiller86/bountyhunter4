import React from "react"

function VacationSpots(props) {
    return (
        <div>
            <h1>{props.tripSpots.place}</h1>
            <h2>{props.tripSpots.price}</h2>
            <h3>{props.tripSpots.timeToGo}</h3>
        </div>
    )
}

export default VacationSpots