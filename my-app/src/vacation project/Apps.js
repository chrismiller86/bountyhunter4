import React from "react"
import VacationSpots from "../VacationSpots"
import vacationDatabase from "../vacationDatabase"


function Apps() {
    const differentVacations = vacationDatabase.map(item => <VacationSpots key={item.id} tripSpots={item} />)

    return (
        <div>
            {differentVacations}

        </div>
    )

}

export default Apps