import React from "react"
import Friend from "./Friend"

import friendsList from "./friendsList"

function App() {


    const rolladex = friendsList.map(function (individual) {
        return (
            <h1>
                <Friend data={individual} />

            </h1>
        )
    })


    return (
        <div>
            {rolladex}
        </div>
    )

}

export default App




